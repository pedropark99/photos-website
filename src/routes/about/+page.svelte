<script>
    import MainMenu from "../mainMenu.svelte";
	import { onMount } from 'svelte';
    import { locale } from "../../stores";

    const page_content_options = {
		English: {
			"homepage.title": "<h2>About me<h2/>",
			"homepage.body": " <p> I'm Pedro, an amateur photographer based in Belo Horizonte, Brazil. I actually work full-time as Data Platform Engineer. So I work a lot with technology, data, AI and programming. But I also love photography, and when I have time, I take my camera and shoot on the streets, documenting life as it happens.        </p>            <figure>            <img src=\"HTZ_0219-2.jpg\" alt=\"My photo\" width=\"35%\" />        </figure>        <p>            I personally love street and portrait photography. These            are the styles of photography that I'm most interested in.            If you want to improve your image on social medias, or,            if you want to make a more professional profile on the internet,            consider booking a photo shoot with me 😉:</p>",
			"homepage.body.gear": "<p>My photos are made with the following gear:</p><ul>    <li>Camera Canon T5i.</li>    <li>Lens Canon 50mm 1.8 STM.</li>    <li>Photos edited mostly in RawTherapee, and sometimes in DarkTable.</li></ul>"
		},
		Português: {
			"homepage.title": "<h2>Sobre mim<h2/>",
			"homepage.body": "<p> Meu nome é Pedro! Sou um fotógrafo amador de Belo Horizonte, Brasil. Na verdade, eu trabalho <i>full-time</i> como Data Platform Engineer. Portanto, eu trabalho bastante com tecnologia, dados, IA e programação. Mas eu também amo a fotografia, e quando tenho um tempo livre, eu pego minha câmera, e fotografo nas ruas, documentando a vida a medida que ela acontece. </p>  <figure> <img src=\"HTZ_0219-2.jpg\" alt=\"My photo\" width=\"35%\" /> </figure> <p> Eu pessoalmente amo a fotografia de rua e a fotografia de retratos. Esses são os estilos de fotografia que mais me interessam.           Se você deseja aprimorar a sua imagem nas redes sociais, ou, se você deseja ter um perfil mais profissional na internet, considere marcar um <i>photo shoot</i> comigo 😉:</p>",
			"homepage.body.gear": "<p>Minhas fotos são produzidas com os seguintes equipamentos:  </p>    <ul>      <li>Camera Canon T5i.</li>      <li>Lente Canon 50mm 1.8 STM.</li>      <li>Fotos são editadas em sua maioria no RawTherapee, e às vezes, no DarkTable.</li>  </ul>"
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
        {@html page_content_options[local_locale]["homepage.title"]}
        {@html page_content_options[local_locale]["homepage.body"]}

		<div class="merchButtons">
			<button><a href="https://www.instagram.com/mineiro.pelasruas/">Instagram</a></button>
			<button><a href="https://wa.me/5531985124294">WhatsApp</a></button>
			<button><a href="mailto:pedropark99@gmail.com">Email</a></button>
		</div>

		{@html page_content_options[local_locale]["homepage.body.gear"]}

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

figure {
    vertical-align: top;
    margin: 0px;
}

img {
    vertical-align: top;
    float: left;
    margin: 20px;
}

</style>