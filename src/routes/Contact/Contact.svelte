<section>
    <div class="title">
        <span class="text">
			Contactame
		</span>
    </div>
    <div class="content">
        <div class="info">
            De igual manera puedes encontrarme el otras plataformas como:

            <div class="list">
                <a href="https://codepen.io/Phownix">Codepen</a>
                <a href="https://discord.com/w_Phoenix#8035">Discord</a>
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
		grid-gap: 0 1.5rem;
	}

    section .content .info{
        font-size: 1.1em;
        letter-spacing: .5px;
        word-spacing: 2px;
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