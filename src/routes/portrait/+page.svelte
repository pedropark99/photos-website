<script>
    import MainMenu from "../../lib/mainMenu.svelte";
	import is_string from "$lib/utils";
	import Masonry from "../../lib/masonry.svelte";
	import { onMount } from 'svelte';
	import {
		isLanguageDropdownOpen,
		isDropdownOpen
	} from './../../stores.js'
    import CopyrightMessage from "$lib/copyrightMessage.svelte";
    import Footer from "$lib/footer.svelte";


	const images_paths_webp = import.meta.glob("./../../../static/portraits/*.webp");
	var images = [];
	for (const image_path in images_paths_webp) {
		let image_path_fixed = String(image_path).replace('../../../static/', '')
		images.push(image_path_fixed)
	}

	onMount(() => {
		document.getElementById("portrait-button").style.textDecoration = "underline 1pt solid #222222";
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



<svelte:head>
  {#each images as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>



<div class="app"  on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

	<Masonry {images}/>

	<CopyrightMessage />

	<Footer />
</div>


<style>
	
	svg {
		filter: invert(12%) sepia(10%) saturate(7149%) hue-rotate(345deg) brightness(96%) contrast(96%);
	}

</style>