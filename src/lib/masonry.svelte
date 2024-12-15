<script>
	import { goto } from "$app/navigation";
	import { imageCatalog } from "$lib/image_catalog";
    import { currentPageImageCatalog } from './../stores.js';
    export let images = [];
    $currentPageImageCatalog = new imageCatalog(images[0], images);

    function get_screen_width() {
        return (window.innerWidth > 0) ? window.innerWidth : screen.width;
    }

    function zoom_over_image(image_node) {
        if (get_screen_width() <= 767) {
            // Do nothing;
            // For now, the image zoom modal is deactivated for mobile.
            return;
        }
        const image_path = image_node.target.src;
        $currentPageImageCatalog.set_current_image(image_path);
		goto("/imageview");
    }
</script>



<div class="mansoryGrid">
    {#each images as image}
        <div class="mansoryGridItem">
            <figure>
                <img
                    on:click={zoom_over_image}
                    src="{image}"
                    alt=""
                    width="350px"
                    loading="lazy"
                />
            </figure>
        </div>
    {/each}
</div>




<style>
    figure {
		margin: 0;
		display: grid;
		grid-template-rows: 1fr auto;
		margin-bottom: 10px;
		break-inside: avoid;
	}

	figure > img {
		grid-row: 1 / -1;
		grid-column: 1;
	}

	.mansoryGrid {
		column-count: 4;
		column-gap: 10px;
		column-width: calc(72vw / 4);
		width: 75vw;
		margin: auto;
	}

	img {
		animation: fadeIn 2s;
		width: calc(70vw / 4);
		border-radius: 15px;
		display: block;
	}

	.mansoryGridItem {
		width: calc(70vw / 4);
	}

	.mansoryGridItem:hover {
		opacity: 0.8;
		cursor: pointer;
	}


	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}



    @media (max-width: 1640px) and (min-width: 768px) {
        img {
			border-radius: 10px;
			max-width: 35vw;
			width: 35vw;
		}

		.mansoryGrid {
			column-count: 2;
			column-width: 35vw;
			column-gap: 10px;
			width: 75vw;
            margin: auto;
		}

		.mansoryGridItem {
			width: 35vw;
		}
    }


	@media (max-width: 767px) {
		img {
			border-radius: 10px;
			max-width: 95vw;
			width: 95vw;
		}

		.mansoryGrid {
			column-count: 1;
			column-width: 95vw;
			column-gap: 0px;
			width: 95vw;
		}

		.mansoryGridItem {
			width: 95vw;
		}
	}
</style>