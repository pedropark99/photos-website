<script>
    import MainMenu from "../mainMenu.svelte";
	import { onMount } from 'svelte';
    import { locale } from "../../stores";

    const page_content_options = {
		English: {
		"homepage.title": "<h2>About me<h2/>",
		"homepage.body": " <p> I'm Pedro, an amateur photographer based in Belo Horizonte, Brazil. I actually work full-time as Data Platform Engineer. So I work a lot with            technology, data, AI and programming. But I also            love photography, and when I have time, I take my camera,            and shoot on the streets, documenting life as it happens.        </p>            <figure>            <img src=\"HTZ_0219-2.jpg\" alt=\"My photo\" width=\"35%\" />        </figure>        <p>            I personally love street and portrait photography. These            are the styles of photography that I'm most interested in.            If you want to improve your image on social medias, or,            if you want to make a more professional profile on the internet,            consider booking a photo shoot with me 😉,            by sending me a message through <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram</a>,    or <a href=\"https://wa.me/5531985124294\">WhatsApp</a>, or via <a href=\"mailto:pedropark99@gmail.com\">Email</a>.    </p>"
		},
		Português: {
		"homepage.title": "<h2>Sobre mim<h2/>",
		"homepage.body": "<p> Meu nome é Pedro! Sou um fotógrafo amador de Belo Horizonte, Brasil. Na verdade, eu trabalho <i>full-time</i> como Data Platform Engineer. Portanto, eu trabalho bastante com tecnologia, dados, IA e programação. Mas eu também amo a fotografia, e quando tenho um tempo livre, eu pego minha câmera, e fotografo nas ruas, documentando a vida a medida que ela acontece. </p>  <figure> <img src=\"HTZ_0219-2.jpg\" alt=\"My photo\" width=\"35%\" /> </figure> <p> Eu pessoalmente amo a fotografia de rua e a fotografia de retratos. Esses são os estilos de fotografia que mais me interessam.           Se você deseja aprimorar a sua imagem nas redes sociais, ou, se você deseja ter um perfil mais profissional na internet, considere marcar um <i>photo shoot</i> comigo 😉, mandando uma mensagem pelo <a href=\"https://www.instagram.com/mineiro.pelasruas/\">Instagram</a>,    ou <a href=\"https://wa.me/5531985124294\">WhatsApp</a>, ou via <a href=\"mailto:pedropark99@gmail.com\">Email</a>.    </p>"
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
	</div>
</div>


<style>

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