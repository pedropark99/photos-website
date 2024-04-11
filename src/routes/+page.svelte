<script>
	import MainMenu from "./mainMenu.svelte"
	import { locale } from "../stores"

	const page_content_options = {
		English: {
		"homepage.welcome": "<h2>Welcome!✋<h2/>",
		"homepage.body": "<p>    I'm Pedro! An amateur photographer based in Belo Horizonte, Brazil.    In this website, you can find out more about me, and also, check out my    portfolio of photos. I personally love street and portrait photography,    and these are the styles of photography I do the most.</p><p>   If you are interested in booking a photo shoot with me 😉,   send me a message through <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram</a>,    or <a href=\"https://wa.me/5531985124294\">WhatsApp</a>, or via <a href=\"mailto:pedropark99@gmail.com\">Email</a>.</p><p>    Currently, I am working on a personal project called <strong>mineiro.pelasruas</strong>, which    is a <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram account</a>    where I share photos that document life in my region.    If you like this project, please follow and share it with your friends 🥳🎉.</p><p>    My photos are made with the following gear:</p><ul>    <li>Camera Canon T5i.</li>    <li>Lens Canon 50mm 1.8 STM.</li>    <li>Photos edited mostly in RawTherapee, and sometimes in DarkTable.</li></ul>"
		},
		Português: {
		"homepage.welcome": "<h2>Bem vindo!✋<h2/>",
		"homepage.body": "<p> Meu nome é Pedro! Sou um fotógrafo amador de Belo Horizonte, Brasil. Neste website, você pode descobrir mais sobre mim, e também, conhecer o meu portfólio de fotografias. Eu pessoalmente amo a fotografia de rua e a fotografia de retratos. Portanto, esses são os estilos de fotografia que eu pratico mais. </p><p>     Se você estiver interessado em marcar um <i>photo shoot</i> comigo 😉,      me mande uma mensagem pelo <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram</a>,       ou <a href=\"https://wa.me/5531985124294\">WhatsApp</a>, or por <a href=\"mailto:pedropark99@gmail.com\">Email</a>.  </p>    <p>      Atualmente, venho trabalhando em um projeto pessoal chamado <strong>mineiro.pelasruas</strong>,      que é uma <a href=\"https://www.instagram.com/mineiro.pelasruas/\">conta no Instagram</a>      onde compartilho fotos que documentam a vida na minha região.      Se você gosta deste projeto, por favor, siga e compartilhe ele com os seus amigos 🥳🎉.  </p>    <p>      Minhas fotos são produzidas com os seguintes equipamentos:  </p>    <ul>      <li>Camera Canon T5i.</li>      <li>Lente Canon 50mm 1.8 STM.</li>      <li>Fotos são editadas em sua maioria no RawTherapee, e às vezes, no DarkTable.</li>  </ul>"
		},
	};

	
	let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);
</script>


<div class="window">
	<MainMenu/>
	<div class="pageContent">
		{@html page_content_options[local_locale]["homepage.welcome"]}
		{@html page_content_options[local_locale]["homepage.body"]}
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