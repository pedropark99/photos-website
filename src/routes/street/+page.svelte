<script>
    import MainMenu from "../../lib/mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	import is_string from "$lib/utils";
	import { imageCatalog } from "$lib/image_catalog";
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
    import DialogZoomImage from "$lib/dialogZoomImage.svelte";
	import {
		isLanguageDropdownOpen,
		isDropdownOpen,
		displayImageZoom,
		currentPageImageCatalog
	} from './../../stores.js';


	const images_paths = import.meta.glob("./../../../static/street/*.jpg");
	let refreshLayout;
	var images = [];
	var image_path_fixed;
	for (const image_path in images_paths) {
		image_path_fixed = String(image_path).replace('../../../static/', '')
		images.push(image_path_fixed)
	}
	$currentPageImageCatalog = new imageCatalog(images[0], images);


	function zoom_over_image(image_node) {
		const image_path = image_node.target.src;
		$currentPageImageCatalog.set_current_image(image_path);
		$displayImageZoom = true;
	}

	function resize_images_in_mobile() {
		if (browser) {
			var screen_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		}
		if (screen_width <= 767) {
			const images = document.getElementsByClassName("imageInMansoryGrid")
			for (let image of images) {
				image.setAttribute("width", "95%")
			}
		}
	}

	onMount(() => {
		document.getElementById("street-button").style.textDecoration = "underline 1pt solid #222222";
		resize_images_in_mobile();
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
		<div class="leftEmptySpace"></div>

		<div class="actualPageContent">
			<Masonry items={images} colWidth={"350px"} bind:refreshLayout={refreshLayout}>
				{#each images as image}
						<div class="grid-item">
							<img
								class="imageInMansoryGrid"
								loading="lazy"
								on:click={ (event) => { zoom_over_image(event) } }
								on:load={refreshLayout}
								src="{image}"
								alt=""
								width="350px"
							/>
						</div>
				{/each}
			</Masonry>

		

			{#if $displayImageZoom}
				<DialogZoomImage />
			{/if}


			<div class="copyrightMessage">&copy Copyright Pedro Faria.</div>

		</div>

		<div class="rightEmptySpace"></div>
	</div>
</div>


<style>

	.pageContent {
		display: grid;
		grid-template-columns: 5vw 90vw 5vw;
		margin-right: calc(5%);
	}

	.modalCloseButton {
		font-size: 25pt;
	}

	.modalCloseButton:hover {
		cursor: pointer;
	}

	.imageInModal {
		max-height: 130vh;
	}

	.copyrightMessage {
		margin-top: 60px;
		margin-bottom: 30px;
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	.grid-item {
		animation: fadeIn 2s;
		width: 350px;
	}

	svg {
		filter: invert(12%) sepia(10%) saturate(7149%) hue-rotate(345deg) brightness(96%) contrast(96%);
	}

	img {
		border-radius: 15px;
    }

	.grid-item:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	@media (max-width: 767px) {
		.grid-item {
			width: 95% !important;
		}

		img {
			border-radius: 10px;
		}
	}

</style>