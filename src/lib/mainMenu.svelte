<script>
	import Fa from "svelte-fa";
	import {
		faInstagram,
		faWhatsapp,
	} from "@fortawesome/free-brands-svg-icons";
	import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
	import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
	import { locale, isDropdownOpen, isLanguageDropdownOpen } from "../stores";
	import Logo from "./../../static/logov2.png?enhanced";

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
			"events.label": "EVENTOS",
		},
		English: {
			"description": "Photographer 📷 based at Belo Horizonte - Brazil. Street and Portrait Photography.",
			"home.label": "HOME",
			"about.label": "ABOUT ME",
			"street.label": "STREET PHOTOGRAPHY",
			"portrait.label": "PORTRAITS",
			"events.label": "EVENTS",
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
		const language_chosen = event.target.innerText;
		$locale = language_chosen;
	};

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
    <div class="logoContainer">
		<enhanced:img class="logoImage" src={Logo} />
	</div>


	<div class="menuOptionsList">
		<div class="languageDropdownContainer">
			<button
				class="mobileLanguageButtonDropdown"
				on:click={handleLanguageDropdownClick}
			><Fa
					icon={faGlobe}
					color="var(--main-text-brown-color)"
					size="18pt"
			/></button>

			{#if $isLanguageDropdownOpen}
				<div class="dropdownContent">
					<button on:click={changeLanguage}>Português</button>
					<button on:click={changeLanguage}>English</button>
				</div>
			{/if}
		</div>


		<div class="menuOption" id="home-button" ><a href=".">{menu_options[local_locale]["home.label"]}</a></div>
		<div class="menuOption" id="about-button" ><a href="/about">{menu_options[local_locale]["about.label"]}</a></div>
		<div class="menuOption" id="street-button" ><a href="/street">{menu_options[local_locale]["street.label"]}</a></div>
		<div class="menuOption" id="portrait-button" ><a href="/portrait">{menu_options[local_locale]["portrait.label"]}</a></div>
		<div class="menuOption" id="events-button" ><a href="/events">{menu_options[local_locale]["events.label"]}</a></div>
	</div>


	<div class="socialMediaContact">
		<a href="https://www.instagram.com/mineiro.pelasruas/"> <Fa icon={faInstagram} color="var(--main-text-brown-color)" size="20pt"/> </a>
		<a href="https://wa.me/5531985124294"> <Fa icon={faWhatsapp} color="var(--main-text-brown-color)" size="20pt"/> </a>
		<a href="mailto:pedropark99@gmail.com"> <Fa icon={faEnvelope} color="var(--main-text-brown-color)" size="20pt"/> </a>
	</div>


</div>








<div class="mainMenuMobile">
	<div class="mobileMenuOptionsContainer">
		<div class="logoContainer">
			<enhanced:img class="logoImage" src={Logo} />
		</div>

		<div class="mobileMenusContainer" >
			<div class="mobileMenuDropdownContainer">
				<button
					class="mobileLanguageButtonDropdown"
					on:click={handleLanguageDropdownClick}
				>
					<Fa
						icon={faGlobe}
						color="var(--main-text-brown-color)"
						size="18pt"
					/>
				</button>

				<button
					class="mobileButtonDropdown"
					on:click={handleDropdownClick}
				>
					<Fa
						icon={faBars}
						color="white"
					/>
				</button>
				

				{#if $isDropdownOpen}
					<div class="dropdownContent">
						<a href=".">{menu_options[local_locale]["home.label"]}</a>
						<a href="/about">{menu_options[local_locale]["about.label"]}</a>
						<a href="/street">{menu_options[local_locale]["street.label"]}</a>
						<a href="/portrait">{menu_options[local_locale]["portrait.label"]}</a>
						<a href="/events">{menu_options[local_locale]["events.label"]}</a>
					</div>
				{/if}

				{#if $isLanguageDropdownOpen}
					<div class="dropdownContent">
						<button class="languageOptionButton" on:click={changeLanguage}>Português</button>
						<button class="languageOptionButton" on:click={changeLanguage}>English</button>
					</div>
				{/if}
			</div>
		</div>
	</div>

</div>



<style>
	.mainMenu {
		display: grid;
		grid-template-columns: 3fr 10fr 3fr;
		column-gap: 20px;
	}

	.logoImage {
		height: 100px;
		width: 100px;
		object-fit: cover;
	}

	.languageDropdownContainer {
		position: relative;
	}

	.logoContainer {
		display: flex;
		align-items: center;
	}

	.socialMediaContact {
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	.menuOptionsList {
		display: flex;
		gap: 30px;
		align-items: center;
		justify-content: center;
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

	.mobileLanguageButtonDropdown {
		background: none;
		border: none;
	}

	.mobileLanguageButtonDropdown:hover {
		cursor: pointer;
	}

	.dropdownContent {
		display: grid;
		grid-template-rows: 30px 30px;
		position: absolute;
		z-index: 99999;
		width: 120px;
		background: white;
		border-radius: 2px;
		border-style: solid;
		border-width: 0.01cm;
		border-color: #adacac;
	}

	.dropdownContent a {
		color: var(--main-text-brown-color);
		text-decoration: none;
		display: block;
	}

	.dropdownContent button {
		font-size: 11pt;
		font-family: 'Hanken Grotesk', sans-serif;
		background: none;
		border: none;
		text-decoration: none;
		display: block;
	}

	.dropdownContent button:hover {
		cursor: pointer;
		background: var(--main-text-brown-color);
		color: var(--argentinian-blue);
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
			grid-template-rows: 100px;
		}

		.mobileMenuOptionsContainer {
			display: grid;
			grid-template-columns: 40% 60%;
		}

		.mobileMenusContainer {
			display: flex;
			align-items: right;
			text-align: right;
			justify-content: right;
		}

		

		.logoContainer {
			display: flex;
			align-items: center;
			text-align: left;
		}

		.logoImage {
			object-fit: contain;
			width: 100px;
			height: 100px;
		}




		.dropdownContent button {
			margin: 20px;
			font-size: 10pt;
		}

		.dropdownContent a {
			margin: 20px;
			font-size: 10pt;
		}

		.dropdownContent {
			display: block;
			position: absolute;
			top: 70px;
			right: 15px;
			z-index: 99999;
		}




		.mobileLanguageButtonDropdown {
			position: relative;
			margin-left: 30px;
			margin-right: 30px;
			padding-left: 0px;
			padding-right: 0px;
		}

		.mobileMenuDropdownContainer {
			display: grid;
			position: relative;
			margin: 20px;
			grid-template-columns: 30% 70%;
			grid-template-rows: 100%;
			vertical-align: center;
			place-items: center;
			text-align: center;
		}

		.mobileButtonDropdown {
			width: 70px;
			position: relative;
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


		h1 {
			font-family: Cormorant, serif;
			font-size: 32pt;
			margin: 0;
		}

	}
</style>
