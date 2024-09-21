<script>

	import Navbar from "$lib/Navbar.svelte";
	import '../app.css';
	import Footer from "$lib/Footer.svelte";
</script>

<main>


	<div class="relative flex flex-col justify-between min-h-screen z-{-50}">
		<Navbar/>
		<div class="flex-grow">
			<slot />
		</div>
		<Footer/>
	</div>

	<div class="stars h-full"></div>
	<div class="twinkling h-full"></div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        max-height: 100%;
    }
</style>
