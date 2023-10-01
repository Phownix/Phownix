<script>
    import json from '$lib/json/work.json';
</script>

<section>
    <div class="title">
        <span class="text">
			Mis Proyectos
		</span>
    </div>
    <div class="content">
        {#each json as x}
            <a href="/proyect/{x.name.replaceAll(' ','_')}" class="card">
                <div class="thumbnail">
                    <img src="{x.thumbnail}" alt="{x.name}">
                </div>
                <div class="body">
                    <h3>{x.name}</h3>
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
	section{
		margin-top: 3rem;
	}

    section .title{
        align-items: self-start !important;
    }

    section .title .text{
        padding: 2rem 0 !important;
        margin-bottom: 0 !important;
    }

    section .content{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem 1.5rem;
	}

	section .card{
		display: flex;
		flex-direction: column;
		gap: .5rem;
		width: 100%;
		background-color: #f5f5f5;
        border: 1px solid #e0e0e0;
		color: inherit;
		text-decoration: none;
		border-radius: .5rem;
	}

	section .card:hover .thumbnail img{
		transform: scale(1.2) rotate(1deg);
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
		transform: scale(1.25);
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