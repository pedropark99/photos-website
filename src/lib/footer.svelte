<script>
	import Fa from "svelte-fa";
	import {
		faInstagram,
		faWhatsapp,
	} from "@fortawesome/free-brands-svg-icons";
	import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
    import { locale } from "../stores";
    const menu_options = {
		Português: {
            "links.label": "PÁGINAS",
            "contact.label": "CONTATO",
			"home.label": "Home",
			"about.label": "Sobre mim",
			"street.label": "Fotografia de rua",
			"portrait.label": "Retratos",
			"events.label": "Eventos",
		},
		English: {
            "links.label": "PAGES",
            "contact.label": "CONTACT",
			"home.label": "Home",
			"about.label": "About me",
			"street.label": "Street Photography",
			"portrait.label": "Portraits",
			"events.label": "Events",
		},
	};
</script>




<div class="appFooter">
    <div class="upperEmptySpace"></div>
    
    <div class="footerContainer">
        <div class="logoImageContainer"><img class="logoImage" src="logov2.svg" /></div>
        <div class="vl"></div>

        <div class="footerOptionsContainer">
            <h1>{menu_options[$locale]["links.label"]}</h1>

            <div class="footerOptionPageLink"><a href=".">{menu_options[$locale]["home.label"]}</a></div>
            <div class="footerOptionPageLink"><a href="/about">{menu_options[$locale]["about.label"]}</a></div>
            <div class="footerOptionPageLink"><a href="/street">{menu_options[$locale]["street.label"]}</a></div>
            <div class="footerOptionPageLink"><a href="/portrait">{menu_options[$locale]["portrait.label"]}</a></div>
            <div class="footerOptionPageLink"><a href="/events">{menu_options[$locale]["events.label"]}</a></div>
        </div>

        <div class="footerOptionsContainer">
            <h1>{menu_options[$locale]["contact.label"]}</h1>

            <div class="socialMediaContact">
                <div><a href="https://www.instagram.com/mineiro.pelasruas/"> <Fa icon={faInstagram} color="var(--main-text-brown-color)" size="15pt"/></a> Instagram </div>
                <div><a href="https://wa.me/5531985124294"> <Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="15pt"/></a> WhatsApp</div>
                <div><a href="mailto:pedropark99@gmail.com"> <Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="15pt"/></a> Email</div>
            </div>
        </div>

    </div>

</div>





<style>
    @media (max-width: 767px) {
        .logoImage {
            height: 70px;
            width: 70px;
            max-width: 70px;
            max-height: 70px;
            object-fit: cover;
        }
        
        .footerContainer {
            grid-template-columns: 1fr 30px 3fr 3fr !important;
            margin-left: 5px !important;
            margin-right: 5px !important;
        }
    }

    .logoImageContainer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .socialMediaContact {
        display: flex;
        flex-direction: column;
		gap: 10px;
        align-items: left;
        justify-content: center;
        font-size: 11pt;
    }

    .socialMediaContact a {
        margin-right: 5px;
    }

    h1 {
        font-size: 13pt;
    }

    .logoImage {
		height: 100px;
		width: 100px;
		object-fit: cover;
	}

    .footerOptionPageLink {
        margin-bottom: 8px;
    }

    .footerOptionsContainer {
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        word-wrap: normal;
        justify-content: center;
    }

    .footerOptionsContainer a {
		color: var(--main-text-brown-color);
        font-size: 11pt;
		text-decoration: none;
	}

    .footerOptionsContainer a:hover {
        color: white;
    }

    .footerContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 3fr 3fr;
        margin-right: 10%;
        margin-left: 10%;
    }

    .footerContainer .vl {
        justify-self: center;
        border-radius: 2px;
        border-left: 2px solid var(--main-text-brown-color);
        height: 200px;
        width: 5px;
    }

    .appFooter {
        display: grid;
        grid-template-rows: 40px 1fr;
        place-items: center;
        /* color: var(--argentinian-blue);
        background-color: var(--main-text-brown-color); */
        color: var(--main-text-brown-color);
        background-color: var(--argentinian-blue);
        width: 100%;
        height: 300px;
    }
</style>