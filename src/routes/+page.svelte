<script>
	import MainMenu from "$lib/mainMenu.svelte";
	import { onMount } from 'svelte';
	import is_string from "$lib/utils";
	import HomepageCards from "$lib/homepageCards.svelte";
	import Banners from "$lib/banners.svelte";
	import { locale, isDropdownOpen, isLanguageDropdownOpen } from "../stores";
    import CopyrightMessage from "$lib/copyrightMessage.svelte";
    import Footer from "$lib/footer.svelte";

	const page_text = {
		English: {
			"welcome": "Welcome!✋",
			"body.p1": "I'm Pedro! A photographer 📸 based in Belo Horizonte, Brazil. I enjoy <strong>creating memories</strong> that brings joy and nostalgia to other people through photography. ",
			"merch": "If you are interested in booking an event coverage, or, a photo shoot with me 😉, send me a message through Instagram, or WhatsApp, or via Email:",
			"body.p2": "Currently, I am working on a personal project called <strong>mineiro.pelasruas</strong>, which    is a <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram account</a>    where I share photos that document life in my region.    If you like this project, please follow and share it with your friends 🥳🎉."
		},
		Português: {
			"welcome": "Bem vindo!✋",
			"body.p1": "Me chamo Pedro! Sou um fotógrafo 📸 de Belo Horizonte, Brasil. Eu gosto de <strong>criar lembranças</strong> que tragam alegria e nostalgia para outras pessoas através da fotografia. ",
			"merch": "Se você estiver interessado em marcar uma cobertura de algum evento, ou um ensaio fotográfico comigo 😉, me mande uma mensagem pelo Instagram, ou WhatsApp, ou por Email:",
			"body.p2": "Atualmente, venho trabalhando em um projeto pessoal chamado <strong>mineiro.pelasruas</strong>,      que é uma <a href=\"https://www.instagram.com/mineiro.pelasruas/\">conta no Instagram</a>      onde compartilho fotos que documentam a vida na minha região.      Se você gosta deste projeto, por favor, siga e compartilhe ele com os seus amigos 🥳🎉."
		},
	};

	
	let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);

	let ready = false;
	onMount(() => {
		document.getElementById("home-button").style.textDecoration = "underline 1pt solid #222222";
	})

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

		<HomepageCards />

		<div class="textContainer" >
			<h2>{page_text[local_locale]["welcome"]}</h2>
			<p>{@html page_text[local_locale]["body.p1"] + page_text[local_locale]["body.p2"]}</p>

			<p>{@html page_text[local_locale]["merch"]}</p>
			<div class="merchButtons">
				<button><a href="https://www.instagram.com/mineiro.pelasruas/">Instagram</a></button>
				<button><a href="https://wa.me/5531985124294">WhatsApp</a></button>
				<button><a href="mailto:pedropark99@gmail.com">Email</a></button>
			</div>
		</div>

		<Banners />

		<CopyrightMessage />

	</div>

	<Footer />

</div>





<style>
	h2 {
		font-family: Outfit, serif;
		font-size: 25pt;
		font-weight: bold;
		color: #3c190b;
		margin-bottom: 10px;
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