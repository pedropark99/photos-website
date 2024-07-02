<script>
    import MainMenu from "../../lib/mainMenu.svelte";
	import is_string from "$lib/utils";
	import Masonry from "../../lib/Masonry.svelte";
    import DialogZoomImage from "$lib/dialogZoomImage.svelte";
	import { imageCatalog } from "$lib/image_catalog";
	import { onMount } from 'svelte';
	import {
		isLanguageDropdownOpen,
		isDropdownOpen,
		currentPageImageCatalog,
		displayImageZoom
	} from './../../stores.js'
    import CopyrightMessage from "$lib/copyrightMessage.svelte";
    import Footer from "$lib/footer.svelte";
	const images_paths = import.meta.glob("./../../../static/portraits/*.jpg");

	let refreshLayout;
	var images = [];
	var image_path_fixed;
	for (const image_path in images_paths) {
		image_path_fixed = String(image_path).replace('../../../static/', '')
		images.push(image_path_fixed)
	}

	$currentPageImageCatalog = new imageCatalog(images[0], images);

	onMount(() => {
		document.getElementById("portrait-button").style.textDecoration = "underline 1pt solid #222222";
	})

	function zoom_over_image(image_node) {
		const image_path = image_node.target.src;
		$currentPageImageCatalog.set_current_image(image_path);
		$displayImageZoom = true;
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



			{#if $displayImageZoom}
				<DialogZoomImage />
			{/if}

			<CopyrightMessage />

		</div>

		<div class="leftEmptySpace"></div>
	</div>


	<Footer />
</div>


<style>
	.pageContent {
		display: grid;
		grid-template-columns: 5vw 90vw 5vw;
	}

	.modalCloseButton {
		font-size: 25pt;
	}

	.imageInModal {
		max-height: 130vh;
	}

	.pageContent {
		margin-right: calc(5%);
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

	.grid-item img:hover {
		opacity: 0.8;
        cursor: pointer;
    }

</style>