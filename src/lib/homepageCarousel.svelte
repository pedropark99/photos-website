<script>
    import { onMount } from "svelte";
    import { locale } from '../stores';
    import Carousel from "./carousel.svelte";
    import {
        images_desktop,
        images_mobile,
        page_text
    } from '../data/homepage_cards_data.js';
    import { imageCatalog } from "./image_catalog";


    const desktop_catalog = new imageCatalog(0, images_desktop);
    const mobile_catalog = new imageCatalog(0, images_mobile);
</script>




<h1 transition:fade={{duration:500}}>
    {@html page_text[$locale]["top.message"]}
</h1>

<div class="desktopCarousel">
    <Carousel id="desktopSiema" image_catalog={desktop_catalog} />
</div>


<div class="mobileCarousel">
    <Carousel id="mobileSiema" image_catalog={mobile_catalog} />
</div>





<style>
    .mobileCarousel {
        display: none;
    }

    h1 {
		font-family: Outfit, serif;
		font-size: 38pt;
		color: var(--main-text-brown-color);
		text-align: center;
        margin-bottom: 10px;
	}

    @media (max-width: 767px) {
        .mobileCarousel {
            display: block;
        }

        .desktopCarousel {
            display: none;
        }

        h1 {
			font-size: 25pt;
		}
    }
</style>