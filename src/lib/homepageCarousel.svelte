<script>
    import { imageCatalog } from './image_catalog';
    import { locale } from '../stores';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Carousel from './carousel.svelte';
    import {
        images_desktop,
        images_mobile,
        images_to_preload,
        page_text
    } from '../data/homepage_cards_data.js';

    let desktop_catalog = new imageCatalog(0, images_desktop);
    let mobile_catalog = new imageCatalog(0, images_mobile);

    function remove_desktop_catalog() {
        const elem = document.getElementsByClassName("desktopCarouselContainer");
        elem[0].remove();
    }

    onMount(() => {
        if (window.innerWidth < 767) {
            remove_desktop_catalog();
        }
    })
</script>



<svelte:head>
  {#each images_to_preload as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>



<h1 transition:fade={{duration:500}}>{@html page_text[$locale]["top.message"]}</h1>



<div class="desktopCarouselContainer">
    <Carousel image_catalog={desktop_catalog} />
</div>


<div class="mobileCarouselContainer">
    <Carousel image_catalog={mobile_catalog} />
</div>





<style>
    .mobileCarouselContainer {
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
        .mobileCarouselContainer {
            display: block;
        }

        .desktopCarouselContainer {
            display: none;
        }
    
        h1 {
			font-size: 25pt;
		}
    }
</style>