<script>
	import { page } from '$app/stores';
	import Counter from './Counter.svelte';
	import json from '$lib/json/work.json';
</script>

<svelte:head>
	<title>Phownix</title>
	<meta name="description" content="Portafolio" />
</svelte:head>

<section class="welcome">
	<h1>Hi!, I'm Paulo Gutierrez</h1>
	<p>
		Mi nombre es Paulo Gutierrez, pero muchos me conocen como Phownix. Me dedico al desarrollo web y cuento con amplios conocimientos en React, Express, Laravel y Svelte. También soy experto en bases de datos, tanto las relacionales como las no relacionales, siendo mi especialidad MongoDB y Mariadb. Estudié técnico en electrónica y actualmente me encuentro cursando mi 5to semestre de ingeniería en informática en el Instituto Profesional Inacap Chillán. Me apasiona el mundo de la tecnología y me gusta estar siempre actualizado en las últimas tendencias del sector para ofrecer siempre lo mejor en mis proyectos.
	</p>
</section>

<section class="projects">
	<div class="header">
		<h2>Projectos Desarrollados</h2>

		<ul class="filter">
			<li>
				<a aria-current={$page.url.hash === '' ? "page" : false} href="/">Todos</a>
			</li>
			<li>
				<a aria-current={$page.url.hash === '#Web' ? "page" : false} href="/#Web">Web</a>
			</li>
			<li>
				<a aria-current={$page.url.hash === '#App' ? "page" : false} href="/#App">Aplicaciones</a>
			</li>
			<li>
				<a aria-current={$page.url.hash === '#ServerSide' ? "page" : false} href="/#ServerSide">API</a>
			</li>
		</ul>
	</div>

	<div class="list">
		{#each json as x}
			<div class="projct">
				<img src="{x.thumbnail}" alt="{x.name}">
				<div class="info">
					<h3>{x.name}</h3>
				</div>
			</div>
		{/each}
		<span id="Web"></span>
		<span id="App"></span>
		<span id="ServerSide"></span>
	</div>
</section>

<section style="display: none;">
	<h1>to your new<br />SvelteKit app</h1>

	<h2>try editing <strong>src/routes/+page.svelte</strong></h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		margin-bottom: 2rem;
	}
	
	section.welcome{
		margin-bottom: 3rem;
	}

	section.welcome h1{
		color: var(--color-theme-1); 
		font-size: 3em; 
		margin: 1rem 0;
	}

	section.welcome p{
		text-align: center;
		width: 95%;
	}

	section.projects .header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	section.projects .header h2{
		font-size: 1.3em;
	}

	section.projects .header .filter{
		display: flex;
		gap: .3rem;
	}

	section.projects .header .filter li{
		list-style: none;
	}

	section.projects .header .filter li a{
		position: relative;
		padding: .2rem .4rem;
		color: var(--color-text);
		border-radius: .2rem;
	}

	section.projects .header .filter li a:hover{
		background-color: var(--color-theme-2);
		text-decoration: none;
		color: var(--color-bg-1);
	}

	section.projects .header .filter li a[aria-current='page'] {
		background-color: var(--color-theme-2);
		color: var(--color-bg-1);
	}

	section.projects .list{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
		margin-top: 1rem;
	}

	section.projects .list .projct{
		background-color: var(--color-white);
		border-radius: .3rem;
		padding: 1rem;
	}

	section.projects .list .projct img{
		width: 100%;
		border-radius: .3rem;
	}

	h1 {
		width: 100%;
	}

	@media (max-width: 720px) {
		section.projects .list {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
			padding: 0 1rem;
		}

		section.projects .list .projct{
			width: 100%;
			min-height: 200px;
		}
	}
</style>
