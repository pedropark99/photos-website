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
	h1 {
		font-family: Outfit, serif;
		font-size: 38pt;
		color: var(--main-text-brown-color);
		margin-bottom: 0px;
		text-align: center;
	}

</style>