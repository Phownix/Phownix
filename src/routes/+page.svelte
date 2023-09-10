<script>
	import { page } from '$app/stores';
	import About from './About/About.svelte';
	import Header from './Header/Header.svelte';
	import Proyects from './Proyects/Proyects.svelte';
	import Skill from './Skill/Skill.svelte';
</script>

<svelte:head>
	<title>Phownix</title>
	<meta name="description" content="Portafolio" />
</svelte:head>

<section>
	<Header />
	<Proyects />
	<Skill />
	<About />
</section>

<style>
	section{
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
	}
</style>
