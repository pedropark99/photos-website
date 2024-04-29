<script>
	import Fa from 'svelte-fa';
	import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import {locale} from "../stores"

	import Switch from './Switch.svelte';

	let local_locale = "Português";
	const menu_options = {
		"Português": {
			"description": "Fotógrafo 📷 baseado em Belo Horizonte - Brasil. Fotografia de rua e retratos.",
			"home.label": "HOME",
			"about.label": "SOBRE MIM",
			"street.label": "FOTOGRAFIA DE RUA",
			"portrait.label": "RETRATOS"
		},
		"English": {
			"description": "Photographer 📷 based at Belo Horizonte - Brazil. Street and Portrait Photography.",
			"home.label": "HOME",
			"about.label": "ABOUT ME",
			"street.label": "STREET PHOTOGRAPHY",
			"portrait.label": "PORTRAITS"
		}
	};

	const locale_callback = locale.subscribe((value) => local_locale = value);
</script>



<div class="mainMenu">

    <div class="nameHeader">
		<h1>Pedro Faria</h1>
	</div>

	<div class="emptySpace"></div>


	<div class="menuOptionsList">
		<div class="menuOption" id="home-button" ><a href=".">{menu_options[local_locale]["home.label"]}</a></div>
		<div class="menuOption" id="about-button" ><a href="/about">{menu_options[local_locale]["about.label"]}</a></div>
		<div class="menuOption" id="street-button" ><a href="/street">{menu_options[local_locale]["street.label"]}</a></div>
		<div class="menuOption" id="portrait-button" ><a href="/portrait">{menu_options[local_locale]["portrait.label"]}</a></div>
	</div>


	<div class="socialMediaContact">
		<a href="https://www.instagram.com/mineiro.pelasruas/"> <Fa icon={faInstagram} color="var(--main-text-brown-color)" size="20pt"/> </a>
		<a href="https://wa.me/5531985124294"> <Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="20pt"/> </a>
		<a href="mailto:pedropark99@gmail.com"> <Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="20pt"/> </a>
	</div>


</div>


<style>

	.mainMenu {
		display: grid;
		grid-template-columns: 5fr 120px 10fr 2fr;
		column-gap: 20px;
	}

	.nameHeader {
		display: flex;
		align-items: center;
	}


	.socialMediaContact {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.menuOptionsList {
		display: flex;
		gap: 30px;
		align-items: center;
	}

	.mainMenu a {
		color: var(--main-text-brown-color);
		text-decoration: none;
	}

	.menuOption:hover {
		width: fit-content;
		height: 25px;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 5px;
		background-color: var(--argentinian-blue);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-family: Cormorant, serif;
		font-size: 38pt;
		font-style: italic;
		color: var(--main-text-brown-color);
		margin: 0px;
		padding: 0px;
	}


</style>