<script>
    import json from '$lib/json/work.json';
</script>

<section>
    <div class="title">
        <span class="text">
			Algunos Proyectos
		</span>
    </div>
    <div class="content">
        {#each json as x}
            <article class="card">
                <div class="thumbnail">
                    <img src="{x.thumbnail}" alt="{x.name}">
                </div>
                <div class="body">
                    <h3>{x.name}</h3>
                </div>
            </article>
        {/each}
    </div>
	<div class="view_more_btn">
		<a href="/" class="vw_more">Ver mas</a>
	</div>
</section>

<style>
	section{
		background-color: var(--color-bg-2);
		color: var(--dark-text);
		border-radius: .5rem;
	}
    section .content{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem 1.5rem;
	}

	section .view_more_btn{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;
		width: 100%;
	}

	section .view_more_btn .vw_more{
		padding: .6rem 1.5rem;
        font-size: 1em;
		font-weight: 600;
        border-radius: .5rem;
        background-color: #131313;
        border: 1px solid #1c1c1c;
        color: white;
        text-decoration: none;
	}

	section .card{
		display: flex;
		flex-direction: column;
		gap: .5rem;
		width: 100%;
		background-color: #131313;
        border: 1px solid #1c1c1c;
		border-radius: .5rem;
	}

	section .card:hover .thumbnail img{
		transform: scale(1.1) rotate(-1deg);
	}

	section .card .thumbnail{
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

	section .card .body{
		display: flex;
		flex-direction: column;
		padding: .5rem 1rem;
	}

	section .card .body h3{
		font-size: 1em;
	}

	@media (max-width: 960px) {
		section{
			margin: 0 1rem;
		}
		section .content{
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 680px) {
		section .content{
			grid-template-columns: repeat(2, 1fr);
		}
		section{
			padding: 2.5rem 1.5rem;
		}
	}

	@media (max-width: 460px) {
		section .content{
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>