<script>
    const instagram = "https://www.instagram.com/mineiro.pelasruas/";
    const email = "mailto:pedropark99@gmail.com";
    const whatsapp = "https://wa.me/5531985124294";
</script>


<div class="merchButtons">
    <button><a href={instagram}>Instagram</a></button>
    <button><a href={whatsapp}>WhatsApp</a></button>
    <button><a href={email}>Email</a></button>
</div>


<style>
    .merchButtons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    button {
        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
        background-color: var(--main-text-brown-color);
        border-radius: 6px;
        border: var(--main-text-brown-color);
		background: var(--main-text-brown-color);
		color: var(--argentinian-blue);
    }

    button:hover {
        cursor: pointer;
        background-color: var(--argentinian-blue);
        color: var(--main-text-brown-color);
    }

    a {
        color: inherit;
        text-decoration: none;
        font-family: Outfit, serif;
		font-size: 15pt;
    }


    @media (max-width: 767px) {
		button a {
			font-family: Outfit, serif;
			font-size: 13pt;
			color: var(--argetinian-blue);
			text-decoration: none;
		}

		.merchButtons button {
			border-radius: 5px;
			padding: 10px;
			margin-left: 5px;
			margin-right: 5px;
		}
	}
</style>