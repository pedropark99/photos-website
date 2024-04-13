<script>
    import MainMenu from "../mainMenu.svelte";

	const images = [
		'IMG_8363.jpg',
		'IMG_8378.jpg',
		'IMG_8383.jpg'
	]
</script>


<div class="window">
	<MainMenu/>
	<div class="pageContent">
		<div class='imageList'>
			{#each images as image}
				<img src="{image}" alt="" width="60%" />
			{/each}
		</div>
	</div>
</div>


<style>
	img {
		border-radius: 15px;
	}
</style>