<script>
    import MainMenu from "../../lib/mainMenu.svelte";
	import { onMount } from 'svelte';
	import is_string from "$lib/utils";
    import { locale, isLanguageDropdownOpen, isDropdownOpen } from "../../stores";
    import CopyrightMessage from "$lib/copyrightMessage.svelte";
    import Footer from "$lib/footer.svelte";

    const page_text = {
		English: {
			"title": "About me",
			"body.p1": "Hello! My name is Pedro. I'm a photographer from Belo Horizonte, Brazil. I work mainly with portrait, event, and landscape photography. But I also have a strong interest in street photography, and whenever I have some free time, I grab my camera and shoot on the streets, documenting life as it happens.",
			"body.p2": "If you are interested in booking an event coverage, or, a photo shoot with me 😉, send me a message through Instagram, or WhatsApp, or via Email:",
		},
		Português: {
			"title": "Sobre mim",
			"body.p1": "Olá! Meu nome é Pedro. Sou um fotógrafo de Belo Horizonte, Brasil. Trabalho especialmente com fotografia de retratos, eventos, e de paisagens. Mas também tenho um forte interesse em fotografia de rua, e sempre quando tenho um tempo livre, eu pego minha câmera e fotografo nas ruas, documentando a vida a medida que ela acontece.",
			"body.p2": "Se você estiver interessado em marcar uma cobertura de algum evento, ou um ensaio fotográfico comigo 😉, me mande uma mensagem pelo Instagram, ou WhatsApp, ou por Email.",
		},
	};

    let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);

    onMount(() => {
		document.getElementById("about-button").style.textDecoration = "underline 1pt solid #222222";
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


<div class="app"  on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>
    <div class="pageContent">
		<div class="leftEmptySpace"></div>

		<div class="actualPageContent">

			<div class="myPersonalPhoto">
				<img src="IMG_3378.webp" alt="Me" width="90%" />
			</div>

			<h2>{@html page_text[local_locale]["title"]}</h2>
			<p>{@html page_text[local_locale]["body.p1"]}</p>
			<p>{@html page_text[local_locale]["body.p2"]}</p>


			<div class="merchButtons">
				<button><a href="https://www.instagram.com/mineiro.pelasruas/">Instagram</a></button>
				<button><a href="https://wa.me/5531985124294">WhatsApp</a></button>
				<button><a href="mailto:pedropark99@gmail.com">Email</a></button>
			</div>

			
			<CopyrightMessage />

		</div>

		<div class="rightEmptySpace"></div>

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

	.myPersonalPhoto {
		display: block;
		text-align: center;
		justify-content: center;
		align-items: center;
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

	img {
		margin: 30px;
	}


	@media (max-width: 767px) {
		img {
			margin: 0px;
			margin-top: 10px;
		}
		
		button a {
			font-family: Outfit, serif;
			font-size: 13pt;
		}

		.merchButtons button {
			border-radius: 5px;
			padding: 10px;
			margin-left: 5px;
			margin-right: 5px;
		}
	}

</style>