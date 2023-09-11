<script>
    import json from '$lib/json/skill.json';
</script>

<section>
    <div class="title">
        <span class="text">
            Habilidades
        </span>
    </div>
    <div class="list_skills">
        {#each json as x}
            <span class="skill">{x.name}</span>
        {/each}
    </div>
</section>

<style>
    section .list_skills{
		display: flex;
		align-items: center;
		justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
	}
    
    section .list_skills .skill{
        padding: .5rem 1.5rem;
        border: .2rem solid #222222f0;
        color: #222222f0;
        font-size: 1.1em;
        font-weight: 600;
        border-radius: .1rem;
    }

    @media (max-width: 680px) {
		section{
			padding: 2.5rem 1.5rem;
		}

        section .list_skills .skill{
            font-size: 1em;
        }
	}
</style>