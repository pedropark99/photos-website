<script>
	import Fa from 'svelte-fa'
	import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
</script>

<div class="mainMenu">

    <h1>Pedro Faria</h1>
	<hr/>
	<div class="socialMediaContact">
		<a href="https://www.instagram.com/mineiro.pelasruas/"><Fa icon={faInstagram} color="var(--main-text-brown-color)" size="20pt"/></a>
		<a href="https://wa.me/5531985124294"><Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="20pt"/></a>
		<a href="mailto:pedropark99@gmail.com"><Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="20pt"/></a>
	</div>

	<br><br><br>

	<div class="menuOption"><a href=".">HOME</a></div>
    <div class="menuOption"><a href="/about">ABOUT ME</a></div>
    <div class="menuOption"><a href="/street">STREET PHOTOGRAPHY</a></div>
    <div class="menuOption"><a href="/portrait">PORTRAITS</a></div>
</div>


<style>
	h1 {
		font-family: Cormorant, serif;
		font-size: 38pt;
		font-style: italic;
		color: var(--main-text-brown-color);
		margin-bottom: 50px;
	}

	hr {
		margin-top: -30pt;
		border-top: 2px solid #222222;
	}

	.socialMediaContact {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 4fr;
		margin-right: 20px;
	}

	.mainMenu {
		margin-left: 30px;
	}

	.menuOption {
		font-family: "Outfit", sans-serif;
		font-size: 11pt;
		font-weight: bold;
		color: var(--main-text-brown-color);
        margin-bottom: 25px;
	}

	.menuOption:hover {
		width: fit-content;
		height: 25px;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 5px;
		background-color: var(--argentinian-blue);
		display: flex;
		justify-content:center;
		align-items: center;
	}


	a {
		color: var(--main-text-brown-color);
		text-decoration: none;
	}

	a:hover {
		color: #222222;
	}
</style>