<script>
    import MainMenu from "../mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	
	const images = [
		'IMG_8304.jpg',
		'IMG_8305.jpg',
		'IMG_8307.jpg',
		'IMG_8308.jpg',
		'IMG_8310.jpg',
		'IMG_8311.jpg',
		'IMG_8312.jpg',
		'IMG_8315.jpg',
		'IMG_8316.jpg',
		'IMG_8317.jpg',
		'IMG_8318.jpg',
		'IMG_8320.jpg',
		'IMG_8363.jpg',
		'IMG_8383.jpg'
	]

</script>



<div class="window">
	<MainMenu/>
	<div class="pageContent">


	<Masonry items={images} colWidth={"450px"}>
		{#each images as image}
				<div class="grid-item"><img src="{image}" alt="" width="100%"/></div>
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