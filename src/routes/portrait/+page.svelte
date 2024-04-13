<script>
    import MainMenu from "../mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	
	const images = [
		'portraits/IMG_8318.jpg',
		'portraits/IMG_8320.jpg',
		'portraits/IMG_8330.jpg',
		'portraits/IMG_8335.jpg',
		'portraits/IMG_8420.jpg'
	]

</script>



<div class="window">
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