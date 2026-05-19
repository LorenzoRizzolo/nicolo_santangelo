<script>
	import { onMount } from 'svelte';

	let { children, type = 'slideUp', duration = 0.8, delay = 0 } = $props();

	let element;
	let isVisible = $state(false);
	let isMounted = $state(false);

	onMount(() => {
		isMounted = true;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		observer.observe(element);

		// Controlla se elemento è già visibile
		const rect = element.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			isVisible = true;
			observer.unobserve(element);
		}

		return () => {
			observer.disconnect();
		};
	});

	const animationTypes = {
		fade: 'enter-fade',
		slideUp: 'enter-top',
		slideDown: 'enter-bottom',
		slideLeft: 'enter-left',
		slideRight: 'enter-right',
		scale: 'enter-scale',
		zoom: 'enter-scale'
	};

	const exitTypes = {
		fade: 'exit-fade',
		slideUp: 'exit-top',
		slideDown: 'exit-bottom',
		slideLeft: 'exit-left',
		slideRight: 'exit-right',
		scale: 'exit-scale',
		zoom: 'exit-scale'
	};
</script>

<div
	bind:this={element}
	class="wrapper"
	style="--duration: {duration}s; --delay: {delay}ms"
>
	<div
		class={isVisible ? animationTypes[type] : exitTypes[type]}
		class:enter-animation={isVisible}
		class:exit-animation={isMounted && !isVisible}
	>
		{@render children()}
	</div>
</div>

<style>
	.wrapper {
		--duration: 0.8s;
		--delay: 0s;
		overflow: hidden;
	}

	/* Applica transizioni SEMPRE */
	.wrapper > div {
		transition-duration: var(--duration);
		transition-delay: var(--delay);
		transition-property: opacity, transform;
		transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.exit-animation {
		pointer-events: none;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Enter animations - visible state */
	.enter-fade {
		opacity: 1;
	}

	.enter-top {
		opacity: 1;
		transform: translateY(0);
		margin: 10px;
		height: calc(100% - 90px);
	}

	.enter-bottom {
		opacity: 1;
		transform: translateY(0);
	}

	.enter-left {
		opacity: 1;
		transform: translateX(0);
	}

	.enter-right {
		opacity: 1;
		transform: translateX(0);
	}

	.enter-scale {
		opacity: 1;
		transform: scale(1);
	}

	/* Exit animations - initial hidden state */
	.exit-fade {
		opacity: 0;
	}

	.exit-top {
		transform: translateY(-60px);
		opacity: 0;
	}

	.exit-bottom {
		transform: translateY(60px);
		opacity: 0;
	}

	.exit-left {
		transform: translateX(-60px);
		opacity: 0;
	}

	.exit-right {
		transform: translateX(60px);
		opacity: 0;
	}

	.exit-scale {
		transform: scale(0.8);
		opacity: 0;
	}
</style>
