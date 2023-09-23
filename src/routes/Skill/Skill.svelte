<script>
    import json from '$lib/json/skill.json';
</script>

<section>
    <div class="title">
        <span class="text">
            Mis Habilidades
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
        padding: .6rem 1.5rem;        
        color: #1c1c1c;
        font-size: 1em;
        font-weight: 600;
        
        background-color: #fff;
        border-radius: .5rem;
        border: 1px solid #1c1c1c;
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