<script>
	import { page } from '$app/stores';
	import About from './About/About.svelte';
	import Contact from './Contact/Contact.svelte';
	import Proyects from './Proyects/Proyects.svelte';
	import Skill from './Skill/Skill.svelte';
</script>

<svelte:head>
	<title>Phownix</title>
	<meta name="description" content="Portafolio" />
</svelte:head>

<div>
	<About />
	<Proyects />
	<Skill />
	<Contact />
</div>