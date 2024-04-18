<script>
	import MainMenu from "./mainMenu.svelte";
	import { onMount } from 'svelte';
	import Cards from './cards.svelte';
	import { locale } from "../stores";

	const page_content_options = {
		English: {
			"homepage.welcome": "<h2>Welcome!✋<h2/>",
			"homepage.body.p1": "<p>    I'm Pedro! An amateur photographer based in Belo Horizonte, Brazil.    In this website, you can find out more about me, and also, check out my    portfolio of photos. I personally love street and portrait photography. If you are interested in booking a photo shoot with me 😉,   send me a message through <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram</a>,    or <a href=\"https://wa.me/5531985124294\">WhatsApp</a>, or via <a href=\"mailto:pedropark99@gmail.com\">Email</a>.</p>",
			"homepage.body.p2": "<p>    Currently, I am working on a personal project called <strong>mineiro.pelasruas</strong>, which    is a <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram account</a>    where I share photos that document life in my region.    If you like this project, please follow and share it with your friends 🥳🎉.</p><p>   My photos are made with the following gear:</p><ul>    <li>Camera Canon T5i.</li>    <li>Lens Canon 50mm 1.8 STM.</li>    <li>Photos edited mostly in RawTherapee, and sometimes in DarkTable.</li></ul>"
		},
		Português: {
			"homepage.welcome": "<h2>Bem vindo!✋<h2/>",
			"homepage.body.p1": "<p> Meu nome é Pedro! Sou um fotógrafo amador de Belo Horizonte, Brasil. Neste website, você pode descobrir mais sobre mim, e também, conhecer o meu portfólio de fotografias. Eu pessoalmente amo a fotografia de rua e a fotografia de retratos. Se você estiver interessado em marcar um <i>photo shoot</i> comigo 😉,      me mande uma mensagem pelo <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram</a>,       ou <a href=\"https://wa.me/5531985124294\">WhatsApp</a>, or por <a href=\"mailto:pedropark99@gmail.com\">Email</a>.  </p>",
			"homepage.body.p2": "<p>      Atualmente, venho trabalhando em um projeto pessoal chamado <strong>mineiro.pelasruas</strong>,      que é uma <a href=\"https://www.instagram.com/mineiro.pelasruas/\">conta no Instagram</a>      onde compartilho fotos que documentam a vida na minha região.      Se você gosta deste projeto, por favor, siga e compartilhe ele com os seus amigos 🥳🎉.  </p>    <p>      Minhas fotos são produzidas com os seguintes equipamentos:  </p>    <ul>      <li>Camera Canon T5i.</li>      <li>Lente Canon 50mm 1.8 STM.</li>      <li>Fotos são editadas em sua maioria no RawTherapee, e às vezes, no DarkTable.</li>  </ul>"
		},
	};

	
	let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);

</script>


<div class="app">
	<MainMenu/>

	<div class="pageContent">
		{@html page_content_options[local_locale]["homepage.welcome"]}
		{@html page_content_options[local_locale]["homepage.body.p1"]}

		<Cards/>
		{@html page_content_options[local_locale]["homepage.body.p2"]}
	</div>
</div>





<style>
	h1 {
		font-family: Cormorant, serif;
		font-size: 38pt;
		font-style: italic;
		color: var(--main-text-brown-color);
		margin-bottom: 50px;
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


</style>