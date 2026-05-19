<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<style>
		:global(*) {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		:global(body) {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
			background-color: #ffffff;
			color: #333;
			line-height: 1.6;
			overflow-x: hidden;
		}

		:global(html) {
			scroll-behavior: smooth;
		}

		@keyframes slideInDown {
			from {
				opacity: 0;
				transform: translateY(-30px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@keyframes slideInUp {
			from {
				opacity: 0;
				transform: translateY(30px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		@keyframes scaleIn {
			from {
				opacity: 0;
				transform: scale(0.95);
			}
			to {
				opacity: 1;
				transform: scale(1);
			}
		}

		@keyframes pulse {
			0%, 100% {
				opacity: 1;
			}
			50% {
				opacity: 0.8;
			}
		}

		@keyframes shimmer {
			0% {
				background-position: -1000px 0;
			}
			100% {
				background-position: 1000px 0;
			}
		}
	</style>
</svelte:head>

{@render children()}
