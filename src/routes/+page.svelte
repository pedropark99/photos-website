<script>
	import MainMenu from "$lib/mainMenu.svelte";
	import { onMount } from 'svelte';
	import is_string from "$lib/utils";
	import HomepageCarousel from "$lib/homepageCarousel.svelte";
	import Banners from "$lib/banners.svelte";
	import { locale, isDropdownOpen, isLanguageDropdownOpen } from "../stores";
    import CopyrightMessage from "$lib/copyrightMessage.svelte";
    import Footer from "$lib/footer.svelte";
	import ContactButtons from "$lib/contactButtons.svelte";
	import { page_text } from "../data/homepage_text";

	
	let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);

	let ready = false;
	onMount(() => {
		document.getElementById("home-button").style.textDecoration = "underline 1pt solid #222222";
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







<div class="app" on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

	<div class="pageContent">

		<HomepageCarousel />

		<div class="textContainer" >
			<div class="homepageText">
				<p>
					{@html page_text[local_locale]["body.p1"]}
					{@html page_text[local_locale]["merch"]}
				</p>

				<ContactButtons />
				
			</div>
		</div>

		<Banners />

		<CopyrightMessage />

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

	.homepageText {
		margin-top: 50px;
	}


	@media (max-width: 767px) {

	}

</style>