<script>
    import MainMenu from "../../lib/mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	import DialogZoomImage from "../../lib/dialogZoomImage.svelte";
	import { onMount } from "svelte";
    import * as eventsJson from '../events/events.json';
	import * as imagePaths from '../events/image_paths.json';
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

	onMount(() => {
		document.getElementById("events-button").style.textDecoration = "underline 1pt solid #222222";
	})

	let refreshLayout;
	let event;
	let images;
    let events_to_display = eventsJson.events_list;
	let possible_images = imagePaths.image_list;
	for (let i = 0; i < events_to_display.length; i++) {
		if (events_to_display[i].id == $eventViewId) {
			event = events_to_display[i];
		}
		if (possible_images[i].id == $eventViewId) {
			images = possible_images[i].image_paths
		}
	}

	$currentPageImageCatalog = new imageCatalog(images[0], images);

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




<div class="app"  on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

	<div class="pageContent">
		<div class="leftEmptySpace"></div>

        <div class="actualPageContent">
			<div class="eventName">{@html event.event_name[$locale]}</div>
			<div class="eventLocationDate">{@html event.event_location} - {@html formatted_event_date}</div>
			<div class="eventDescription"><p>{@html event.event_description[$locale]}</p></div>


			<Masonry items={images} gridGap={"10px"} colWidth={"350px"} bind:refreshLayout={refreshLayout}>
				{#each images as image}
					<div class="grid-item">
						<img
							loading="lazy"
							on:click={zoom_over_image}
							on:load={refreshLayout}
							src="{image}"
							alt=""
							width="350px"
						/>
					</div>		
				{/each}
			</Masonry>

			<CopyrightMessage />

        </div>

		{#if $displayImageZoom}
			<DialogZoomImage />
		{/if}

        <div class="leftEmptySpace"></div>
	</div>
</div>





<style>
	.pageContent {
		display: grid;
		grid-template-columns: 5vw 90vw 5vw;
		margin-right: calc(5%);
		margin-top: 80px;
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
		background-color: var(--moonstone-blue);
		background-size: contain;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 4px;
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	.grid-item {
		animation: fadeIn 2s;
		width: 350px;
	}

	img {
		border-radius: 15px;
    }

	.grid-item img:hover {
		opacity: 0.8;
        cursor: pointer;
    }


	@media (max-width: 767px) {
		.pageContent {
			margin-top: 10px;
		}
	}
</style>