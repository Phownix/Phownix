<script>
	import github from '$lib/images/github.svg';
	import instagram from '$lib/images/instagram.svg';
</script>

<header>
	<div class="web_title">
		<a class="link_text no_space" href="/">
			<span>Phownix</span>
			<span class="colorized">web</span>
		</a>
	</div>

	<nav>
		
	</nav>

	<div class="corner">
		<a target="_blank" href="https://github.com/Phownix">
			<img src={github} alt="GitHub" />
		</a>
		<a target="_blank" href="https://instagram.com/webPhownix">
			<img src={instagram} alt="@Phownix" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.web_title{
		font-size: 2em;
		font-weight: 600;
	}

	.web_title a:hover{
		text-decoration: none;
	}

	.web_title .link_text{
		color: var(--color-text) !important;
	}

	.web_title .colorized{
		display:  none;

		color: var(--color-theme-1);
		font-style: italic;
		/* font-variant:small-caps; */
	}

	.web_title .colorized::before{
		content: "_";
		font-weight: 900;
	}

	.corner {
		display: flex;
		align-items: center;
		justify-content: end;
		gap: .5rem;
		
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}
</style>
