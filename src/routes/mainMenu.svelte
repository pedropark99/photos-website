<script>
	import Fa from 'svelte-fa';
	import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import {locale} from "../stores"

	import Switch from './Switch.svelte';

	let local_locale = "Português";
	const menu_options = {
		"Português": {
			"options": "<div class=\"menuOption\"><a href=\".\">HOME</a></div> <div class=\"menuOption\"><a href=\"/about\">SOBRE MIM</a></div> <div class=\"menuOption\"><a href=\"/street\">FOTOGRAFIA DE RUA</a></div> <div class=\"menuOption\"><a href=\"/portrait\">RETRATOS</a></div>"
		},
		"English": {
			"options": "<div class=\"menuOption\"><a href=\".\">HOME</a></div> <div class=\"menuOption\"><a href=\"/about\">ABOUT ME</a></div> <div class=\"menuOption\"><a href=\"/street\">STREET PHOTOGRAPHY</a></div> <div class=\"menuOption\"><a href=\"/portrait\">PORTRAITS</a></div>"
		}
	};

	const locale_callback = locale.subscribe((value) => local_locale = value);

</script>

<div class="mainMenu">

    <h1>Pedro Faria</h1>
	<hr/>
	<div class="socialMediaContact">
		<a href="https://www.instagram.com/mineiro.pelasruas/"><Fa icon={faInstagram} color="var(--main-text-brown-color)" size="20pt"/></a>
		<a href="https://wa.me/5531985124294"><Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="20pt"/></a>
		<a href="mailto:pedropark99@gmail.com"><Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="20pt"/></a>
	</div>

	<br>
	<Switch bind:value={$locale} label="" design="multi" options={['English', 'Português']}/>


	<br><br>


	{@html menu_options[local_locale]["options"]}

	<br><br><br><br><br><br><br><br><br>

	<div>&copy Copyright Pedro Faria.</div>
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

</style>