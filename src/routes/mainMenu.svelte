<script>
	import Fa from 'svelte-fa';
	import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import {locale} from "../stores"

	import Switch from './Switch.svelte';

	let local_locale = "Português";
	const menu_options = {
		"Português": {
			"description": "Fotógrafo 📷 baseado em Belo Horizonte - Brasil. Fotografia de rua e de retratos.",
			"options": "<div class=\"menuOption\"><a href=\".\">HOME</a></div> <div class=\"menuOption\"><a href=\"/about\">SOBRE MIM</a></div> <div class=\"menuOption\"><a href=\"/street\">FOTOGRAFIA DE RUA</a></div> <div class=\"menuOption\"><a href=\"/portrait\">RETRATOS</a></div>"
		},
		"English": {
			"description": "Photographer 📷 based at Belo Horizonte - Brazil. Street and Portrait Photography.",
			"options": "<div class=\"menuOption\"><a href=\".\">HOME</a></div> <div class=\"menuOption\"><a href=\"/about\">ABOUT ME</a></div> <div class=\"menuOption\"><a href=\"/street\">STREET PHOTOGRAPHY</a></div> <div class=\"menuOption\"><a href=\"/portrait\">PORTRAITS</a></div>"
		}
	};

	const locale_callback = locale.subscribe((value) => local_locale = value);

</script>

<div class="mainMenu">

    <h1>Pedro Faria</h1>

	<p>{@html menu_options[local_locale]["description"]}</p>




	<hr/>
	<br>

	<Switch bind:value={$locale} label="" design="multi" options={['English', 'Português']}/>

	<br><br>

	{@html menu_options[local_locale]["options"]}

	<br><br><br><br><br><br>

	<div class="socialMediaContact">
		<a href="https://www.instagram.com/mineiro.pelasruas/"><Fa icon={faInstagram} color="var(--main-text-brown-color)" size="20pt"/></a>
		<a href="https://wa.me/5531985124294"><Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="20pt"/></a>
		<a href="mailto:pedropark99@gmail.com"><Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="20pt"/></a>
	</div>

	<br><br>

	<div>&copy Copyright 2024 Pedro Faria.</div>
</div>


<style>
	p {
		font-size: 11pt;
		text-align: left;
	}

	h1 {
		font-family: Cormorant, serif;
		font-size: 38pt;
		font-style: italic;
		color: var(--main-text-brown-color);
		margin-bottom: 0pt;
	}

	hr {
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

</style>