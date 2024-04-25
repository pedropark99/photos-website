<script>
	import Fa from 'svelte-fa';
	import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import MainMenu from "./mainMenu.svelte";
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Cards from './cards.svelte';
	import { locale, isDropdownOpen, isLanguageDropdownOpen } from "../stores";

	const page_text = {
		English: {
			"top.message": "Documenting life through memories 📸",
			"welcome": "Welcome!✋",
			"body.p1": "I'm Pedro! An amateur photographer 📸 based in Belo Horizonte, Brazil. I enjoy <strong>creating memories</strong> that brings joy and nostalgia to other people through photography. ",
			"merch": "If you are interested in booking a photo shoot with me 😉, send me a message through Instagram, or WhatsApp, or via Email:",
			"body.p2": "Currently, I am working on a personal project called <strong>mineiro.pelasruas</strong>, which    is a <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram account</a>    where I share photos that document life in my region.    If you like this project, please follow and share it with your friends 🥳🎉."
		},
		Português: {
			"top.message": "Documentando a vida através de memórias 📸",
			"welcome": "Bem vindo!✋",
			"body.p1": "Me chamo Pedro! Sou um fotógrafo 📸 de Belo Horizonte, Brasil. Eu gosto de <strong>criar lembranças</strong> que tragam alegria e nostalgia para outras pessoas através da fotografia. ",
			"merch": "Se você estiver interessado em marcar um <i>photo shoot</i> comigo 😉, me mande uma mensagem pelo Instagram, ou WhatsApp, or por Email:",
			"body.p2": "Atualmente, venho trabalhando em um projeto pessoal chamado <strong>mineiro.pelasruas</strong>,      que é uma <a href=\"https://www.instagram.com/mineiro.pelasruas/\">conta no Instagram</a>      onde compartilho fotos que documentam a vida na minha região.      Se você gosta deste projeto, por favor, siga e compartilhe ele com os seus amigos 🥳🎉."
		},
	};

	
	let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);

	let ready = false;
	onMount(() => {
		ready = true;
		document.getElementById("home-button").style.textDecoration = "underline 1pt solid #222222";
	})

	function is_string(obj) {
		if (typeof obj === 'string' || obj instanceof String)
			return true;
		return false;
	}

	function closeMenuWithClickOutside(event) {
		const container_class = "mobileMenuDropdownContainer";
		const content_class = "dropdownContent";
		const button_class = "mobileButtonDropdown";
		const language_class = "mobileLanguageButtonDropdown";
		
		const element_clicked = event.target.className;
		if (!is_string(element_clicked)) {
			return
		}
		const inside_container = (
			element_clicked.includes(container_class) ||
			element_clicked.includes(button_class) ||
			element_clicked.includes(content_class) ||
			element_clicked.includes(language_class)
		)
		if (inside_container) {
				// Do nothing
				return
		}

		$isDropdownOpen = false;
		$isLanguageDropdownOpen = false;
	}

</script>







<div class="app" on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

	<div class="pageContent">
		
		<br>
		{#if ready}
		<div transition:fade={{ delay: 250, duration: 300 }}>
			<h1 transition:fade={{delay: 10, durantion: 200}}>{page_text[local_locale]["top.message"]}</h1>
		</div>
		{/if}


		<Cards/>
		

		<h2>{page_text[local_locale]["welcome"]}</h2>
		<p>{@html page_text[local_locale]["body.p1"] + page_text[local_locale]["body.p2"]}</p>

		<p>{@html page_text[local_locale]["merch"]}</p>
		<div class="merchButtons">
			<button><a href="https://www.instagram.com/mineiro.pelasruas/">Instagram</a></button>
			<button><a href="https://wa.me/5531985124294">WhatsApp</a></button>
			<button><a href="mailto:pedropark99@gmail.com">Email</a></button>
		</div>


		<div class="emptyVerticalSpace"></div>

		<div class="socialMediaInMobile">
			<div>&copy Copyright 2024 Pedro Faria.</div>
			<br>
			<div class="socialMediaContact">
				<a href="https://www.instagram.com/mineiro.pelasruas/"><Fa icon={faInstagram} color="var(--main-text-brown-color)" size="25pt"/></a>
				<span style="display:inline-block; width: 10px;"></span>
				<a href="https://wa.me/5531985124294"><Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="25pt"/></a>
				<span style="display:inline-block; width: 10px;"></span>
				<a href="mailto:pedropark99@gmail.com"><Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="25pt"/></a>
			</div>
		</div>

		<br><br>

		
	</div>
</div>





<style>
	.emptyVerticalSpace {
		height: 300px;
	}

	button a {
		font-family: Outfit, serif;
		font-size: 20pt;
		color: var(--argetinian-blue);
		text-decoration: none;
	}

	.merchButtons button {
		border-radius: 7px;
		padding: 10px;
		padding-left: 20px;
		padding-right: 20px;
		margin-left: 20px;
		margin-right: 20px;
		border: var(--main-text-brown-color);
		background: var(--main-text-brown-color);
		color: var(--argentinian-blue);
	}

	.merchButtons button:hover {
		background: var(--argentinian-blue);
		color: var(--main-text-brown-color);
	}

	.merchButtons {
		text-align: center;
		align-items: center;
	}

	h1 {
		font-family: Outfit, serif;
		font-size: 38pt;
		color: var(--main-text-brown-color);
		margin-bottom: 0px;
		text-align: center;
	}

	figure {
		text-align: center;
	}

	.slide img {
		width: auto;
		height: auto;
		border-radius: 15px;
		box-shadow: 2px 2px 5px rgba(1, 1, 1, 0.5);
	}

	.slide {
		display: flex;
    	padding: 10px;
		border-radius: 15px;
    	overflow: hidden;
		justify-content: center;
		text-align: center;
		width: 650px;
		height: 500px;
	}

	:global(#slidy_cards .slidy-dots li.active button) {
		color: #77B6EA !important;
		background: #77B6EA !important;
	}
	:global(#slidy_cards .slidy-dots li.dots-arrow-right button) {
		color: #77B6EA !important;
		font-size: 20pt;
	}
	:global(#slidy_cards .slidy-dots li.dots-arrow-left button) {
		color: #77B6EA !important;
		font-size: 20pt;
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




	.socialMediaInMobile {
		display: none;
	}
	@media (max-width: 767px) {
		.socialMediaContact {
			display: flex;
			margin: 0;
			padding: 0;
		}
		.emptyVerticalSpace {
			height: 200px;
		}
		.socialMediaInMobile {
			display: block;
		}

		button a {
			font-family: Outfit, serif;
			font-size: 15pt;
		}

		.merchButtons button {
			border-radius: 7px;
			padding: 10px;
			padding-left: 10px;
			padding-right: 10px;
			margin-left: 10px;
			margin-right: 10px;
		}
	}

</style>