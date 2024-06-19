<script>
    import MainMenu from "../mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	import ZoomImage from "./../dialogZoomImage.svelte"
    import * as eventsJson from '../events/events.json'
	import * as imagePaths from '../events/image_paths.json'
	import { imageCatalog } from "$lib/image_catalog";
	import {
		isLanguageDropdownOpen,
		isDropdownOpen,
		eventViewId,
		imageToZoom,
		displayImageZoom
	} from '../../stores.js'

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

	function is_string(obj) {
		if (typeof obj === 'string' || obj instanceof String)
			return true;
		return false;
	}

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
		const catalog = new imageCatalog(image_path, images);
		$imageToZoom = catalog;
		$displayImageZoom = true;
	}

</script>




<div class="app"  on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

	<div class="pageContent">
		<div class="leftEmptySpace"></div>

        <div class="actualPageContent">
			<Masonry items={images} gridGap={"10px"} colWidth={"350px"} bind:refreshLayout={refreshLayout}>
				{#each images as image}
					<div class="grid-item">
						<img
							loading="lazy"
							on:click={ (event) => { zoom_over_image(event) }}
							on:load={refreshLayout}
							src="{image}"
							alt=""
							width="350px"
						/>
					</div>		
				{/each}
			</Masonry>

			<div>&copy Copyright Pedro Faria.</div>
        </div>

		{#if $displayImageZoom}
			<ZoomImage />
		{/if}

        <div class="leftEmptySpace"></div>
	</div>
</div>





<style>
	.pageContent {
		display: grid;
		grid-template-columns: 5vw 90vw 5vw;
	}

	.pageContent {
		margin-right: calc(5%);
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	.grid-item {
		animation: fadeIn 3s;
		width: 350px;
	}

	img {
		border-radius: 15px;
    }

	.grid-item img:hover {
		opacity: 0.8;
        cursor: pointer;
    }
</style>