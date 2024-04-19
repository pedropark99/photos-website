<script>
    import MainMenu from "../mainMenu.svelte";
	import { onMount } from 'svelte';
    import { locale } from "../../stores";

    const page_text = {
		English: {
			"title": "About me",
			"body.p1": " I'm Pedro, an amateur photographer based in Belo Horizonte, Brazil. I actually work full-time as Data Platform Engineer. So I work a lot with technology, data, AI and programming. But I also love photography, and when I have time, I take my camera and shoot on the streets, documenting life as it happens.",
			"body.p2": "I personally love street and portrait photography. These are the styles of photography that I'm most interested in. If you want to improve your image on social medias, or, if you want to make a more professional profile on the internet, consider booking a photo shoot with me 😉:",
			"body.gear": "My photos are made with the following gear:",
			"body.gearlist": "<li>Camera Canon T5i.</li>  <li>Lens Canon 50mm 1.8 STM.</li> <li>Photos edited mostly in RawTherapee, and sometimes in DarkTable.</li>"
		},
		Português: {
			"title": "Sobre mim",
			"body.p1": "Meu nome é Pedro! Sou um fotógrafo amador de Belo Horizonte, Brasil. Na verdade, eu trabalho <i>full-time</i> como Data Platform Engineer. Portanto, eu trabalho bastante com tecnologia, dados, IA e programação. Mas eu também amo a fotografia, e quando tenho um tempo livre, eu pego minha câmera, e fotografo nas ruas, documentando a vida a medida que ela acontece.",
			"body.p2": "Eu pessoalmente amo a fotografia de rua e a fotografia de retratos. Esses são os estilos de fotografia que mais me interessam. Se você deseja aprimorar a sua imagem nas redes sociais, ou, se você deseja ter um perfil mais profissional na internet, considere marcar um <i>photo shoot</i> comigo 😉:",
			"body.gear": "Minhas fotos são produzidas com os seguintes equipamentos:",
			"body.gearlist": "<li>Camera Canon T5i.</li> <li>Lente Canon 50mm 1.8 STM.</li> <li>Fotos são editadas em sua maioria no RawTherapee, e às vezes, no DarkTable.</li>"
		},
	};

    let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);

    onMount(() => {
		document.getElementById("about-button").style.textDecoration = "underline 1pt solid #222222";
	})
</script>


<div class="app">
	<MainMenu/>
    <div class="pageContent">
        <h2>{@html page_text[local_locale]["title"]}</h2>
        <p>{@html page_text[local_locale]["body.p1"]}</p>

		<img src="HTZ_0219-2.jpg" alt="My photo" width="35%" />

        <p>{@html page_text[local_locale]["body.p2"]}</p>


		<div class="merchButtons">
			<button><a href="https://www.instagram.com/mineiro.pelasruas/">Instagram</a></button>
			<button><a href="https://wa.me/5531985124294">WhatsApp</a></button>
			<button><a href="mailto:pedropark99@gmail.com">Email</a></button>
		</div>

		<p>{@html page_text[local_locale]["body.gear"]}</p>
		<ul>{@html page_text[local_locale]["body.gearlist"]}</ul>

	</div>
</div>


<style>

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

	ul {
		list-style-position: inside;
	}

	img {
		justify-content: center;
		text-align: center;
		align-items: center;
		vertical-align: top;
		float: left;
		margin: 30px;
	}

</style>