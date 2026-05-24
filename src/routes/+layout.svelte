<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/nicolo.ico" />
</svelte:head>

{@render children()}
