<script>
    import MainMenu from "../mainMenu.svelte";

	
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


	<div class="imageListContainer">
		{#each images as image}
				<div class="col"><img src="{image}" alt="" width="60%" /></div>
		{/each}
	</div>


	</div>
</div>


<style>
	.pageContent {
		margin-right: calc(10%);
	}

	.imageListContainer {
		display: flex;
		flex-wrap: wrap;
		margin-top: 100px;
	}
	.col {
		height: auto;
		width: calc(100% / 4);
		display: flex;
		flex-direction: column;
		padding: 5px;
	}

	svg {
		filter: invert(12%) sepia(10%) saturate(7149%) hue-rotate(345deg) brightness(96%) contrast(96%);
	}

	img {
		border-radius: 15px;
	}
</style>