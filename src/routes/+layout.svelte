<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer>
	<div>
		<h2>Contact</h2>
		<a href="mailto:herzal22@htl-shkoder.com">Write a Mail</a>
	</div>

	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin area</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-evenly;
		background-color: purple;
		color: white;
		padding: 30px;
		text-align: center;
	}

	a{
		text-decoration: none;
		color: white;
	}
</style>
