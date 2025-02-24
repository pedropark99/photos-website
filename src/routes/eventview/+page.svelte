<script>
    import MainMenu from "../../lib/mainMenu.svelte";
	import Masonry from "../../lib/masonry.svelte";
	import { onMount } from "svelte";
    import * as eventsJson from '../events/events.json';
	import is_string from "$lib/utils.js";
	import {get_month_name} from "$lib/utils.js";
    import { imageCatalog } from "$lib/image_catalog";
	import {
		isLanguageDropdownOpen,
		isDropdownOpen,
		eventViewId,
		currentPageImageCatalog,
		displayImageZoom,
		locale
	} from '../../stores.js';
    import CopyrightMessage from "$lib/copyrightMessage.svelte";
    import Footer from "$lib/footer.svelte";

	onMount(() => {
		document.getElementById("events-button").style.textDecoration = "underline 1pt solid #222222";
	})

	let event_folders = [
		import.meta.glob("./../../../static/events/galinheiro-rep-14anos/*.webp"),
		import.meta.glob("./../../../static/events/aniversario-ana-2024/*.webp"),
		import.meta.glob("./../../../static/events/ensaio-rojo-2025/*.webp"),
		import.meta.glob("./../../../static/events/ensaio-julia-2025/*.webp"),
	]

	let event = eventsJson.events_list[$eventViewId];
	const images_paths_webp = event_folders[$eventViewId];
	var images = [];
	for (const image_path in images_paths_webp) {
		let image_path_fixed = String(image_path).replace('../../../static/', '')
		images.push(image_path_fixed)
	}

	$currentPageImageCatalog = new imageCatalog(0, images);

	let formatted_event_date;
	const event_date = new Date(event.event_date);
	const event_date_day = event_date.getUTCDate();
	const event_date_year = event_date.getFullYear();
	locale.subscribe(() => {
		const event_date_month = get_month_name(
			event_date.getUTCMonth(),
			$locale
		)
		formatted_event_date = `${event_date_day} ${event_date_month}, ${event_date_year}`;
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

	function zoom_over_image(image_node) {
		const image_path = image_node.target.src;
		$currentPageImageCatalog.set_current_image(image_path);
		$displayImageZoom = true;
	}

</script>




<svelte:head>
  {#each images as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>




<div class="app"  on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

	<div class="eventViewContent">
		<div class="eventName">{@html event.event_name[$locale]}</div>
		<div class="eventLocationDate">{@html event.event_location} - {@html formatted_event_date}</div>
		<div class="eventDescription"><p>{@html event.event_description[$locale]}</p></div>
    </div>

	<Masonry {images} />

	<CopyrightMessage />
	<Footer />
</div>





<style>

	.eventViewContent {
		width: 80vw;
		margin: auto;
	}

	.eventName {
		color: var(--main-text-brown-color);
        text-align: left;
        font-family: Outfit, sans-serif;
        font-weight: bold;
		font-size: 20pt;
		margin-bottom: 5px;
	}

	.eventLocationDate {
		display: inline-block;
		color: #222222;
        font-size: 12pt;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: left;
		background-color: var(--argentinian-blue);
		background-size: contain;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 4px;
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}


</style>