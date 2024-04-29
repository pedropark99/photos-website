<script>
	import Fa from "svelte-fa";
	import {
		faInstagram,
		faWhatsapp,
	} from "@fortawesome/free-brands-svg-icons";
	import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
	import { faGlobe } from "@fortawesome/free-solid-svg-icons";
	import { locale, isDropdownOpen, isLanguageDropdownOpen } from "../stores";

	import Switch from "./Switch.svelte";

	let local_locale = "Português";
	const locale_callback = locale.subscribe((value) => {
		local_locale = value;
	});
	// let local_dropdown = false;
	// const dropdown_callback = isDropdownOpen.subscribe((value) => {
	// 	console.log("INFO: Callback foi acionada")
	// 	local_dropdown = value
	// });
	const menu_options = {
		Português: {
			"description": "Fotógrafo 📷 baseado em Belo Horizonte - Brasil. Fotografia de rua e retratos.",
			"home.label": "HOME",
			"about.label": "SOBRE MIM",
			"street.label": "FOTOGRAFIA DE RUA",
			"portrait.label": "RETRATOS",
		},
		English: {
			"description": "Photographer 📷 based at Belo Horizonte - Brazil. Street and Portrait Photography.",
			"home.label": "HOME",
			"about.label": "ABOUT ME",
			"street.label": "STREET PHOTOGRAPHY",
			"portrait.label": "PORTRAITS",
		},
	};



	const handleDropdownClick = () => {
		if ($isLanguageDropdownOpen) {
			$isLanguageDropdownOpen = false;
		}
		isDropdownOpen.update((value) => !value)
	};
	const handleLanguageDropdownClick = () => {
		if ($isDropdownOpen) {
			$isDropdownOpen = false;
		}
		isLanguageDropdownOpen.update((value) => !value);
	};
	const changeLanguage = (event) => {
		const language_chosen = event.target.innerText
		if (language_chosen === "PORTUGUÊS") {
			$locale = "Português"
		}
		if (language_chosen === "ENGLISH") {
			$locale = "English"
		}
	}

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		// use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
		if (
			relatedTarget instanceof HTMLElement &&
			currentTarget.contains(relatedTarget)
		)
			return; // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
			$isDropdownOpen = false;
	};

</script>



<div class="mainMenu">
    <div class="nameHeader">
		<h1>Pedro Faria</h1>
	</div>

	<div class="emptySpace"></div>


	<div class="menuOptionsList">
		<div class="menuOption" id="home-button" ><a href=".">{menu_options[local_locale]["home.label"]}</a></div>
		<div class="menuOption" id="about-button" ><a href="/about">{menu_options[local_locale]["about.label"]}</a></div>
		<div class="menuOption" id="street-button" ><a href="/street">{menu_options[local_locale]["street.label"]}</a></div>
		<div class="menuOption" id="portrait-button" ><a href="/portrait">{menu_options[local_locale]["portrait.label"]}</a></div>
	</div>


	<div class="socialMediaContact">
		<a href="https://www.instagram.com/mineiro.pelasruas/"> <Fa icon={faInstagram} color="var(--main-text-brown-color)" size="20pt"/> </a>
		<a href="https://wa.me/5531985124294"> <Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="20pt"/> </a>
		<a href="mailto:pedropark99@gmail.com"> <Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="20pt"/> </a>
	</div>


</div>








<div class="mainMenuMobile">
	<div class="mobileMenuOptionsContainer">
		<h1>Pedro Faria</h1>

		<div class="mobileMenuDropdownContainer">
			<button
				class="mobileLanguageButtonDropdown"
				on:click={handleLanguageDropdownClick}
			><Fa
					icon={faGlobe}
					color="var(--main-text-brown-color)"
					size="18pt"
			/></button>

			<button
					class="mobileButtonDropdown"
					on:click={handleDropdownClick}
			>Menu</button>
			

			{#if $isDropdownOpen}
				<div class="dropdownContent">
					<a href=".">{menu_options[local_locale]["home.label"]}</a>
					<a href="/about">{menu_options[local_locale]["about.label"]}</a>
					<a href="/street">{menu_options[local_locale]["street.label"]}</a>
					<a href="/portrait">{menu_options[local_locale]["portrait.label"]}</a>
				</div>
			{/if}

			{#if $isLanguageDropdownOpen}
				<div class="dropdownContent">
					<button on:click={changeLanguage}>PORTUGUÊS</button>
					<button on:click={changeLanguage}>ENGLISH</button>
				</div>
			{/if}
		</div>
	</div>

	<p>{@html menu_options[local_locale]["description"]}</p>
</div>



<style>

	.mainMenu {
		display: grid;
		grid-template-columns: 5fr 120px 10fr 2fr;
		column-gap: 20px;
	}

	.nameHeader {
		display: flex;
		align-items: center;
	}


	.socialMediaContact {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.menuOptionsList {
		display: flex;
		gap: 30px;
		align-items: center;
	}

	.mainMenu a {
		color: var(--main-text-brown-color);
		text-decoration: none;
	}

	.menuOption:hover {
		width: fit-content;
		height: 25px;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 5px;
		background-color: var(--argentinian-blue);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-family: Cormorant, serif;
		font-size: 38pt;
		font-style: italic;
		color: var(--main-text-brown-color);
		margin: 0px;
		padding: 0px;
	}


	.mainMenuMobile {
		display: none;
	}
	/* --------------------- Styles for mobile ---------------------- */
	@media (max-width: 767px) {
		.mainMenu {
			display: none;
			margin-left: 0px;
		}

		.mainMenuMobile {
			display: grid;
			grid-template-rows: 80px 100px;
			align-items: center;
		}

		.mobileMenuOptionsContainer {
			display: grid;
			grid-template-columns: 60% 40% ;
			grid-template-rows: 100px;
			align-items: center;
			text-align: left;
			justify-content: center;
		}










		.mobileMenuDropdownContainer {
			display: grid;
			grid-template-columns: 30% 70%;
			grid-template-rows: 100%;
			vertical-align: center;
			place-items: center;
			text-align: center;
			height: 100px;
			width: auto;
		}

		.mobileLanguageButtonDropdown {
			background: none;
			border: none;
		}

		.mobileButtonDropdown {
			width: 70px;
			padding: 0px;
			padding-top: 10px;
			padding-bottom: 10px;
			font-size: 15pt;
			font-family: "Outfit", "sans-serif";
			color: var(--argentinian-blue);
			background: var(--main-text-brown-color);
			border: none;
			border-radius: 5px;
		}

		.dropdownContent {
			width: 180px;
			background: var(--argentinian-blue);
			float: right;
			right: 0;
			display: block;
			position: relative;
			padding: 20px;
			border-radius: 5px;
		}







		.dropdownContent a {
			font-size: 10pt;
			margin: 15px;
			background: var(--argentinian-blue);
			color: var(--main-text-brown-color);
			text-decoration: none;
			display: block;
		}

		.dropdownContent button {
			background: none;
			border: none;
			font-size: 10pt;
			margin: 15px;
			background: var(--argentinian-blue);
			color: var(--main-text-brown-color);
			text-decoration: none;
			display: block;
		}

		h1 {
			font-family: Cormorant, serif;
			font-size: 32pt;
			margin: 0;
		}

	}
</style>
