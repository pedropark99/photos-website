<script>
    import MainMenu from "../mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	import Modal from './../Modal.svelte';
	const images_paths = import.meta.glob("./../../../static/portraits/*.jpg");

	let refreshLayout;
	var images = [];
	var image_path_fixed;
	for (const image_path in images_paths) {
		image_path_fixed = String(image_path).replace('../../../static/', '')
		images.push(image_path_fixed)
	}

	let showModal = false;
	let selected_image = images[0];
	function zoom_over_image(image_node) {
		const image_path = image_node.src;
		selected_image = image_path;
		showModal = true;
	}
</script>



<div class="app">
	<MainMenu/>
	<div class="pageContent">


	<Masonry items={images} colWidth={"450px"} bind:refreshLayout={refreshLayout}>
		{#each images as image}
				<div class="grid-item"><img loading="lazy" on:load={refreshLayout} src="{image}" alt="" width="100%"/></div>
		{/each}
	</Masonry>

	<Modal bind:showModal>
        <img class="imageInModal" src="{selected_image}" alt="" width="100%" />
    </Modal>

	</div>
</div>


<style>
	.pageContent {
		margin-right: calc(5%);
	}

	.grid-item {
		width: 450px;
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