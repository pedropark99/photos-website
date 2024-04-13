<script>
    import MainMenu from "../mainMenu.svelte";

	
	const images = [
		'IMG_8363.jpg',
		'IMG_8378.jpg',
		'IMG_8383.jpg'
	]
	var current_image_index = 0
	let current_image = images[0]

	function next_image() {
		if (current_image_index === images.length) {
			// Do nothing
			return
		}
	
		current_image_index++
		current_image=images[current_image_index];
	}

	function previous_image() {
		if (current_image_index === 0) {
			// Do nothing
			return
		}
	
		current_image_index--
		current_image=images[current_image_index];
	}

</script>




<div class="window">
	<MainMenu/>
	<div class="pageContent">


	<div class="imageListContainer">

		<button class="button-74" on:click={previous_image}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="35px">
			<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
		</svg>
		</button>



		<div class='imageList'>
			<!--{#each images as image} -->
				<img class="main-image-display" src="{current_image}" alt="" width="60%" />
			<!--{/each} -->
		</div>

		<button class="button-74" on:click={next_image}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="35px">
			<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
		</svg>
		</button>



	</div>



	</div>
</div>


<style>
	.imageListContainer {
		display: grid;
		grid-template-columns: 1fr 20fr 1fr;
		place-items: center;
		text-align: center;
	}



	.button-74 {
		background-color: var(--background-color);;
		border: 2px solid var(--main-text-brown-color);
		border-radius: 18px;
		box-shadow: var(--main-text-brown-color) 4px 4px 0 0;
		color: var(--main-text-brown-color);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button-74:hover {
	background-color: var(--argentinian-blue);
	}

	.button-74:active {
	box-shadow: #422800 2px 2px 0 0;
	transform: translate(2px, 2px);
	}

	@media (min-width: 768px) {
	.button-74 {
		min-width: 120px;
		padding: 0 25px;
	}
	}



	svg {
		filter: invert(12%) sepia(10%) saturate(7149%) hue-rotate(345deg) brightness(96%) contrast(96%);
	}

	img {
		border-radius: 15px;
	}
</style>