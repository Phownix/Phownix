<script>
	import github from '$lib/images/github.svg';
	import instagram from '$lib/images/instagram.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import threads from '$lib/images/threads.svg';
</script>

<nav>
	<div class="principal">
		<div class="nav_title">
			<h1 class="__name">
				<a href="/">
					<span class="colorize">w</span>
					<span class="text">Phownix</span>
				</a>
			</h1>
		</div>
		<div class="menu">
			<ul>
				<li><a href="/">Portafolio</a></li>
				<li><a href="/">Blog</a></li>
			</ul>
		</div>
	</div>
	<div class="sites">
		<a class="site_link instagram" href="https://www.instagram.com/wphownix"><img src="{instagram}" alt="Instagram Icon"></a>
		<a class="site_link threads" href="https://www.threads.net/@wphownix"><img src="{threads}" alt="Threads Icon"></a>
		<a class="site_link github" href="https://github.com/Phownix/"><img src="{github}" alt="Github Icon"></a>
		<a class="site_link linkedin" href="https://www.linkedin.com/in/phownix"><img src="{linkedin}" alt="Linkedin Icon"></a>
	</div>
</nav>

<div class="subnav">
	<span>¿Quieres contactarme? Haz clic <a href="#contact">aquí</a>.</span>

	<a href="mailto:paulogutierrez@outlock.es">paulogutierrez@outlock.es</a>
</div>

<style>
	.subnav{
		position: sticky;
		display: flex;
		top: 0;
		align-items: center;
		justify-content: space-between;
		padding: .25rem 1rem;
		font-size: .9em;
		background-color: darkolivegreen;
		color: white;
		z-index: 1;
		max-width: 1400px;
		margin: auto;
		margin-top: -5rem;
		border-radius: 0 0 .25rem .25rem;
	}

	.subnav a{
		color: inherit;
	}

	nav{
		position: sticky;
		/* position: relative; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		background-color: var(--color-bg-2);
		color: var(--dark-text);
		max-width: 1400px;
		margin: auto;
		z-index: 2;
	}

	nav::after{
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		padding: .125rem;
		bottom: -.25rem;
		border-radius: 0 0 .25rem .25rem;
		max-width: 1400px;
		background-color: darkolivegreen;
	}

	nav .principal .nav_title .__name{
		font-size: 2em;
	}

	nav .principal .nav_title .__name a{
		display: flex;
		align-items: baseline;
		gap: .1rem;
		color: inherit;
		text-decoration: none;
	}

	nav .principal .nav_title .__name a .colorize{
		color: darkolivegreen;
		font-size: .8em;
	}

	nav .principal, nav .principal .menu ul, nav .sites{
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	nav .principal{
		align-items: baseline;
		gap: 1.5rem;
	}

	nav .principal .menu ul li{
		list-style: none;
		display: none;
	}

	nav .principal .menu ul li a{
		color: inherit;
		text-decoration: none;
		font-size: 1.1em;
	}

	nav .sites a.site_link img{
		width: 2rem;
		height: 2rem;
		color: transparent;
	}

	nav .sites a.site_link.threads img{
		width: 1.6rem;
		height: 1.6rem;
	}

	@media (max-width: 460px) {
		nav{
			display: flex;
			align-items: center !important;
			justify-content: center !important;
		}

		nav .sites{
			display: none;
		}
	}

	@media (max-width: 530px) {
		.subnav{
			flex-direction: column;
		}
		.subnav a:nth-child(2){
			display: none;
		}
	}
</style>