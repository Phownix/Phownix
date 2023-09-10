<script>
    import json from '$lib/json/skill.json';
</script>

<section>
    <div class="title">
        Habilidades
    </div>
    <div class="list_skills">
        {#each json as x}
            <span class="skill">{x.name}</span>
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

    section .list_skills{
		display: flex;
		align-items: center;
		justify-content: center;
        flex-wrap: wrap;
        margin-top: 10vh;
        gap: 1rem;
	}
    
    section .list_skills .skill{
        padding: 1vh 3vh;
        border-radius: .5vh;
        border: .5vh solid #222;
        font-size: 3vh;
        border-radius: .2vh;
    }
</style>