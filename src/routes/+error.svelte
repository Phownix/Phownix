<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.error.message} | Phownix</title>
</svelte:head>

<section>
	<h2>{$page.status != 418 ? $page.status : ""} {$page.error.message}</h2>
	<p>I'm sorry, but the page you are looking for is not found on this site. It may have been moved or deleted.</p>
	<!-- <p>Te sugerio regresar a la página de inicio. Si el problema persiste, por favor contáctame para que poder ayudarte.</p> -->
	<p>I appreciate your patience and understanding.</p>
	
</section>

<style>
	section{
		text-align: center;
		max-width: 700px;
		margin: 10rem auto;
		margin-top: 12.5rem;
		padding: 0 1rem !important;
	}

	section h2{
		font-size: 3em;
	}

	section p{
		margin: 1rem 0;
		font-size: 1.2em;
		letter-spacing: .5px;
		word-spacing: 2px;
	}
</style>
