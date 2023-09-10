<script>
    import json from '$lib/json/work.json';
</script>

<section>
    <div class="title">
        Proyectos
    </div>
    <div class="content">
        {#each json as x}
            <article class="card">
                <div class="thumbnail">
                    <img src="{x.thumbnail}" alt="{x.name}">
                    <a href="/{x.name}">Ver Mas</a>
                </div>
                <div class="body">
                    <h3>{x.name}</h3>
                </div>
            </article>
        {/each}
    </div>
</section>

<style>
    section{
        height: 100vh;
        padding: 5vh 10vh;
        scroll-snap-align: start;
		scroll-snap-stop: always;
    }

    section .title{
		font-family: var(--font-alternative);
		font-size: 8vh;
		margin-bottom: 5vh;
	}

    section .content{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 2rem 1.5rem;
	}

	section .card{
		display: flex;
		flex-direction: column;
		gap: .5rem;
		width: 100%;
	}

	section .card:hover .thumbnail a{
		opacity: 1 !important;
	}

	section .card:hover .thumbnail img{
		transform: scale(1.1) rotate(-2deg);
	}

	section .card .thumbnail{
		position: relative;
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: .2rem;
		overflow: hidden;
	}

	section .card .thumbnail img{
		width: 100%;
		height: 100%;
		transition: transform .2s;
	}

	section .card .thumbnail a{
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		opacity: 0;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		font-weight: 600;
		font-size: 2em;
		text-shadow: 0 0 12px #151515f0;
		background-color: #15151590;
		color: inherit;
		z-index: 2;
		transition: opacity .2s;
	}

	section .card .body{
		display: flex;
		flex-direction: column;
	}
</style>