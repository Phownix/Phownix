<script>
    import codepen from '$lib/images/codepen.svg';
    import discord from '$lib/images/discord.svg';
</script>

<section id="contact">
    <div class="title">
        <span class="text">
			Contactame
		</span>
        <p class="sub">¡Hola! Si deseas ponerte en contacto conmigo, no dudes en llenar el siguiente formulario con tu nombre, correo electrónico y mensaje. Estaré encantado de responderte a la brevedad.</p>
    </div>
    <div class="content">
        <div class="info">
            <p>Si prefieres, también puedes escribirme directamente a mi correo electrónico: <a href="mailto:phownix@duck.com">phownix@duck.com</a></p>
            <br>
            <p>También puedes encontrarme en otras plataformas como:</p>

            <div class="list">
                <a target="_blank" title="Codepen" href="https://codepen.io/Phownix">
                    <img src="{codepen}" alt="">
                </a>
                <a target="_blank" title="Discord" href="https://discord.com/w_Phoenix#8035">
                    <img src="{discord}" alt="">
                    Discord
                </a>
            </div>
        </div>
        <form action="" method="post">
            <div class="entry_box">
                <label for="name">Nombre</label>
                <input type="text" name="name" id="name">
            </div>
            <div class="entry_box">
                <label for="email">Correo Electronico</label>
                <input type="email" name="email" id="email">
            </div>
            <div class="entry_box">
                <label for="body">body</label>
                <textarea name="body" id="body" cols="30" rows="10"></textarea>
            </div>

            <button type="submit">Enviar Mensaje</button>
        </form>
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
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 5rem 4rem;
	}

    section .content .info{
        font-size: 1.1em;
        letter-spacing: .5px; 
        word-spacing: 2px;
    }

    section .content .info br{
        margin: 1rem;
    }
    
    section .content .info a{
        color: #556b2f;
        text-decoration: none;
        padding: 0 .5rem;
    }

    section .content .info .list{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    section .content .info .list a{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0 3rem;
        height: 5rem;
        color: inherit;
        text-decoration: none;
        background-color: #131313;
        border-radius: .25rem;
        font-size: 1.5em;
        font-weight: 600;
    }

    section .content .info .list a img{
        height: 2rem;
    }

    section .content form{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    section .content form .entry_box{
        display: flex;
        flex-direction: column;
        gap: .3rem;
    }

    section .content form .entry_box label{
        font-size: 1.1em;
        font-weight: 600;
    }

    section .content form .entry_box input,
    section .content form .entry_box textarea{
        padding: .6rem 1.5rem;
        font-size: .9em;
        border-radius: .5rem;
        background-color: #131313;
        border: 1px solid #1c1c1c;
        color: white;
        text-decoration: none;
        outline: none;
    }

    section .content form button{
        padding: .6rem 1.5rem;
        font-size: 1.1em;
        border-radius: .5rem;
        background-color: #556b2fe0;
        border: 1px solid #1c1c1c;
        color: white;
        text-decoration: none;
    }

    section .content form button:hover{
        background-color: #556b2f;
    }
	

	@media (max-width: 960px) {
		section{
			margin: 0 1rem;
		}
		section .content{
			grid-template-columns: repeat(1, 1fr);
		}

        section .content .info{
            order: 2;
        }
	}

    @media (max-width: 560px) {
		section{
			padding: 2.5rem 1.5rem;
        }
	}
</style>