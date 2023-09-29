<script>
	import About from './Components/About/About.svelte';
	import Contact from './Components/Contact/Contact.svelte';
	import Proyects from './Components/Proyects/Proyects.svelte';
	import Skill from './Components/Skill/Skill.svelte';
</script>

<svelte:head>
	<title>Home | Phownix</title>
	<meta name="description" content="Portafolio" />
</svelte:head>

<div>
	<About />
	<Proyects />
	<Skill />
	<Contact />
</div>