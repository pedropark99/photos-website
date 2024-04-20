<script>
    import MainMenu from "../mainMenu.svelte";
	import Masonry from "../../lib/Masonry.svelte";
	import { onMount } from 'svelte';
	import Modal from './../Modal.svelte';
	const images_paths = import.meta.glob("./../../../static/portraits/*.jpg");

	let refreshLayout;
	var images = [];
	var image_path_fixed;
	for (const image_path in images_paths) {
		image_path_fixed = String(image_path).replace('../../../static/', '')
		images.push(image_path_fixed)
	}

	let dialog;
	let selected_image = images[0];
	function zoom_over_image(image_node) {
		const image_path = image_node.target.src;
		selected_image = image_path;
		dialog.showModal();
	}

	onMount(() => {
		document.getElementById("portrait-button").style.textDecoration = "underline 1pt solid #222222";
	})
</script>



<div class="app">
	<MainMenu/>
	<div class="pageContent">


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




	<dialog bind:this={dialog} on:close on:click|self={() => dialog.close()}>
		<button autofocus class="modalCloseButton" on:click={() => dialog.close()}>&times;</button>
        <hr />
        <img class="imageInModal" src="{selected_image}" alt="" width="100%" />
    </dialog>

	</div>
</div>


<style>
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
		animation: fadeIn 3s;
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