<script>
    import MainMenu from "../mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	const images_paths = import.meta.glob("./../../../static/portraits/*.jpg");

	var images = [];
	var image_path_fixed;
	for (const image_path in images_paths) {
		image_path_fixed = String(image_path).replace('../../../static/', '')
		images.push(image_path_fixed)
	}
</script>



<div class="app">
	<MainMenu/>
	<div class="pageContent">


	<Masonry items={images} colWidth={"450px"}>
		{#each images as image}
				<div class="grid-item"><img loading="lazy" src="{image}" alt="" width="100%"/></div>
		{/each}
	</Masonry>



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
</style>