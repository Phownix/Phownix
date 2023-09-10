<script>
	import github from '$lib/images/github.svg';
	import instagram from '$lib/images/instagram.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<header>
	<div class="web_title">
		<span class="subname">Paulo Gutierrez</span>
		<a class="link_text" href="/">
			<span class="colorize">w</span>
			<span>Phownix</span>
		</a>
	</div>

	<div class="corner">
		<a target="_blank" href="https://www.linkedin.com/in/phownix/">
			<img src={linkedin} alt="Linkedin" />
			Linkedin
		</a>

		<a target="_blank" href="https://github.com/Phownix">
			<img src={github} alt="GitHub" />
			GitHub
		</a>
		
		<a target="_blank" href="https://instagram.com/wphownix">
			<img src={instagram} alt="@Phownix" />
			Instagram
		</a>
	</div>

	<div class="down_btn">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
		</svg>
	</div>
</header>

<style>
	.down_btn{
		display: inline-block;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 1rem;
		margin: auto auto;
		width: min-content;
		animation: keyDown .5s linear infinite alternate;
		cursor: pointer;
	}

	.down_btn svg{
		height: 3rem;
		width: 3rem;
	}

	header {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 5vh 10vh;
		height: 100vh;
		margin: 0 auto;
		
		scroll-snap-align: start;
		scroll-snap-stop: always;
		
		background-repeat: no-repeat;
		background-size: cover;
	}

	header .web_title .subname{
		display: none;
		font-size: 5vh;
		opacity: .1;
	}

	header .web_title a{
		display: flex;
		font-family: var(--font-alternative);
		font-size: 20vh;
		text-decoration: none;
		color: #ffffff;
	}

	header .web_title a span.colorize{
		color: transparent;
		-webkit-text-stroke: .5vh crimson;
	}

	header .corner{
		display: flex;
		align-items: center;
		/* justify-content: right; */
		gap: 2vh;
	}

	header .corner a{
		display: inline-flex;
		align-items: center;
		gap: 1vh;
		text-decoration: none;
		padding: 1vh 3vh;

		font-weight: 600;
		font-size: 2.5vh;
		color: inherit;
		border: .5vh solid #222;
		background-color: #111111;
		border-radius: .5vh;
		transition: background .1s;
	}

	header .corner a:hover{
		/* transform: scale(1.1); */
		background: #222;
	}

	header .corner a img{
		width: 4vh;
		height: 4vh;
		color: white;
	}

	header .corner a.codepen img{
		width: auto;
		height: 1.5em;
		color: white;
	}

	@keyframes keyDown{
		from{
			bottom: 1rem;
		}
		to{
			bottom: 0;
		}
	}
</style>