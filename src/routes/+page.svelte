<script>
	import MainMenu from "./mainMenu.svelte";
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Cards from './cards.svelte';
	import { locale } from "../stores";

	const page_text = {
		English: {
			"top.message": "Documenting life through memories 📸",
			"welcome": "Welcome!✋",
			"body.p1": "I'm Pedro! An amateur photographer 📸 based in Belo Horizonte, Brazil. I enjoy <strong>creating memories</strong> that brings joy and nostalgia to other people. I also work with brands, to <strong>create professional-looking images</strong> for social media or for marketing campaigns.",
			"merch": "If you are interested in booking a photo shoot with me 😉, send me a message through Instagram, or WhatsApp, or via Email:",
			"body.p2": "Currently, I am working on a personal project called <strong>mineiro.pelasruas</strong>, which    is a <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram account</a>    where I share photos that document life in my region.    If you like this project, please follow and share it with your friends 🥳🎉."
		},
		Português: {
			"top.message": "Documentando a vida através de memórias 📸",
			"welcome": "Bem vindo!✋",
			"body.p1": "Me chamo Pedro! Sou um fotógrafo 📸 de Belo Horizonte, Brasil. Eu gosto de <strong>criar lembranças</strong> que tragam alegria e nostalgia para outras pessoas. Eu também trabalho em conjunto com marcas <strong>criando imagens profissionais</strong> para redes sociais ou para campanhas de marketing.",
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

</script>



<div class="app">
	<MainMenu/>

	<div class="pageContent">

		
	</div>
</div>





<style>


</style>