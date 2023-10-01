<script>
	export let data;
</script>

<svelte:head>
	<title>{data.data[0].name} | Phownix</title>
	<meta name="description" content="{data.data[0].short_description}" />
</svelte:head>

<section>
    <div class="th">
        <img src="{data.data[0].thumbnail}" alt="">
    </div>
    <div class="info">
        <h2>{data.data[0].name}</h2>
        <div class="skill">
            {#each data.data[0].tag as x}
                <span>{x}</span>
            {/each}
        </div>
        <img class="mobile" src="{data.data[0].thumbnail}" alt="{data.data[0].name}">
        <p class="body">{data.data[0].short_description}</p>
        <p class="date">{data.data[0].date}</p>
        <a target="_blank" href="{data.data[0].url[0]}" class="url_proyect">{data.data[0].url[0]}</a>

        {#if data.data[0].url[1]}
        <a target="_blank" href="{data.data[0].url[1]}" class="url_proyect">{data.data[0].url[1]}</a>
        {/if}
    </div>

    {#if data.data[0].additional}
    <div class="additional">
        <ul>
            {#each data.data[0].additional as x}
                <li>{x}</li>
            {/each}
        </ul>
    </div>
    {/if}

    <dialog>
        <div class="outbox"></div>
        <div class="box">
            <img class="dialogImage" src="{data.data[0].thumbnail}" alt="{data.data[0].name}">
        </div>
    </dialog>

    <div class="images">
        <h3>Mas Imagenes</h3>
        <div class="list">
            {#each data.data[0].thumbnail_list as x}
                <img src="{x}" alt="{data.data[0].name}">
            {/each}
        </div>
    </div>

    <script>
        window.onload = () => {
            const dialog = document.querySelector("dialog");
            const Images = document.querySelectorAll("img");
            const closeModal = document.querySelector(".outbox");        

            Images.forEach(function(imagen) {
                imagen.addEventListener("click", (e) => {
                    document.querySelector('.dialogImage').src = imagen.getAttribute('src');
                    dialog.showModal();
                });
            });

            closeModal.addEventListener("click", () => {
                dialog.close();
            });
        }
    </script>
</section>

<style>
    dialog{
        position: fixed;
        left: 0; right: 0;
        top: 0; bottom: 0;
        margin: auto;
        align-items: center;
        justify-self: center;
        background-color: transparent;
        border-color: transparent;
    }
    
    dialog[open]{
        display: flex;
    }

    dialog::backdrop{
        background-color: #18181880;
    }

    dialog .outbox{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    dialog .box{
        max-width: 100%;
        width: 50rem;
    }

    dialog .box img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    img{
        cursor: pointer;
    }

	section{
        display: grid;
        grid-template-columns: minmax(40%, 10rem) 1fr;
        grid-gap: 3rem;
		border-radius: .5rem;
        margin-top: 3.5rem;
	}
    
    section h2{
        font-size: 3em;
    }

    section .body{
        margin: 1rem 0;
    }

    section .mobile{
        display: none;
    }

    section .th{
        width: 100%;
        overflow: hidden;
    }

    section .th img{
        width: 100%;
        transform: scale(1.25);
    }

    section .skill{
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        margin-bottom: 1rem;
    }

    section .skill span{
        display: inline-block;
        padding: .25rem 1rem;
        font-size: .75em;
        background-color: var(--color-bg-2);
		color: var(--dark-text);
        opacity: .9;
		border-radius: .5rem;
        font-weight: 600;
        letter-spacing: .5px;
        word-spacing: 2px;
    }
    
    section .skill span:hover{
        background-color: darkolivegreen;
    }

    section .date{
        font-size: .8em;
        opacity: .6;
    }

    section .url_proyect{
        display: block;
        color: darkolivegreen;
        text-decoration: none;
    }

    section .url_proyect:hover{
        text-decoration: underline;
    }

    section .images, section .additional{
        grid-column: 1/3;
    }

    section .images h3{
        font-size: 2em;
        margin: 1rem 0;
    }

    section .list{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
    }

    section .list img{
        width: 100%;
        flex-basis: 25rem;
        border-radius: .25rem;
    }


	@media (max-width: 960px) {
		section{
			grid-template-columns: 1fr;
            grid-gap: 0 !important;
		}

        section .th{
            display: none;
        }

        section .mobile{
            display: block;
            width: 100%;
            border-radius: .25rem;
        }
	}

	@media (max-width: 680px) {
		section{
			padding: 2.5rem 1.5rem;
		}
	}
</style>