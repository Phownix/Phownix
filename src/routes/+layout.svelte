<script>
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>Development by <a href="https://phownix.vercel.app/">Phownix</a> - 2023</p>
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
	}

	footer {
		display: hidden;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
