<script>
    import { imageCatalog } from './image_catalog';
    import { currentPageImageCatalog, locale } from '../stores';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import {Fa} from "svelte-fa";
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

    const images_desktop = [
        'street/img1.webp',
        'street/img2.webp',
        'street/img3.webp',
        'street/img5.webp',
        'street/img7.webp',
        'street/img8.webp',
        'portraits/img2.webp',
        'portraits/img5.webp',
        'portraits/img4.webp',
    ]
    const images_mobile = [
        'portraits/img2.webp',
        'portraits/img01.webp',
        'portraits/img02.webp',
        'street/img9.webp',
        'portraits/img3.webp',
        'street/img18.webp',
        'street/img23.webp',
        'portraits/img4.webp',
        'portraits/img5.webp',
        'street/img16.webp',
    ]
    const images_to_preload = [...new Set(images_desktop.concat(images_mobile))]
    var images = images_desktop;
    let automatic_slideshow = true;
    $currentPageImageCatalog = new imageCatalog(images[0], images);

    const page_text = {
        "English": {
            "top.message": "Documenting life through memories 📸"
        },
        "Português": {
			"top.message": "Documentando a vida através de memórias 📸"
        }
    }

    $: image_to_display = $currentPageImageCatalog.get_image();
    function change_to_image_index(click_event) {
        const index_as_int = parseInt(click_event.target.id);
        automatic_slideshow = false;
        set_image_focus(false);
        $currentPageImageCatalog.set_current_image_with_index(index_as_int);
        image_to_display = $currentPageImageCatalog.get_image();
        set_image_focus(true);
    }

    function slideshow() {
        if (automatic_slideshow) {
            next_image();
            setTimeout(slideshow, 6000);
        }
    }

    function next_image() {
        set_image_focus(false);
        if (typeof $currentPageImageCatalog.current_index !== 'undefined') {
            const img_index = $currentPageImageCatalog.current_index;
            if ((img_index + 1) >= $currentPageImageCatalog.image_paths.length) {
                $currentPageImageCatalog.set_current_image_with_index(0);
            } else {
                $currentPageImageCatalog.next_image();
            }
            image_to_display = $currentPageImageCatalog.get_image();
        }
        set_image_focus(true);
    }

    function previous_image() {
        set_image_focus(false);
        if (typeof $currentPageImageCatalog.current_index !== 'undefined') {
            const img_index = $currentPageImageCatalog.current_index;
            const len = $currentPageImageCatalog.image_paths.length;
            if ((img_index -1) < 0) {
                $currentPageImageCatalog.set_current_image_with_index(len - 1);
            } else {
                $currentPageImageCatalog.previous_image();
            }
            image_to_display = $currentPageImageCatalog.get_image();
        }
        set_image_focus(true);
    }

    function click_previous_image() {
        automatic_slideshow = false;
        previous_image();
    }

    function click_next_image() {
        automatic_slideshow = false;
        next_image();
    }

    function set_image_focus(invert) {
        const buttons = document.getElementsByClassName("indexImageCardButton");
        if (typeof $currentPageImageCatalog.current_index !== 'undefined') {
            let button_to_change = buttons[$currentPageImageCatalog.current_index];
            if (invert) {
                button_to_change.style.background = "var(--main-text-brown-color)";
                button_to_change.style.borderColor = "var(--argentinian-blue)";
            } else {
                button_to_change.style.background = "var(--argentinian-blue)";
                button_to_change.style.borderColor = "var(--main-text-brown-color)";
            }
        }
    }

    let ready = false;
    onMount(() => {
        // This makes the h1 transition work
        ready = true;
        set_image_focus(true);
    
        if (window.innerWidth < 767) {
            images = images_mobile;
        } else {
            images = images_desktop;
        }
        $currentPageImageCatalog = new imageCatalog(images[0], images);
        setTimeout(slideshow, 6000);
    })
</script>






<svelte:head>
  {#each images_to_preload as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>







<div class="homepageImageCardsContainer">
    {#if ready}
        <h1 transition:fade={{duration:500}}>{@html page_text[$locale]["top.message"]}</h1>
    {/if}
    <div class="swapImageCardButtonsContainer">
        <button class="swapImageCardButton" on:click={click_previous_image}>
            <Fa icon={faChevronLeft} size="14pt" color="var(--main-text-brown-color)" />
        </button>

        {#each images as image, index }
            <button id="{index}" class="indexImageCardButton" on:click={(click_event) => change_to_image_index(click_event)}>
            </button>
        {/each}

        <button class="swapImageCardButton" on:click={click_next_image}>
            <Fa icon={faChevronRight} size="14pt" color="var(--main-text-brown-color)" />
        </button>
    </div>

    {#key image_to_display}
        <div class="currentImageInCard" in:fade={{delay:50, duration:700}}>
            <img class="imageInCard" alt="" src="{image_to_display}">
        </div>
    {/key}

</div>


<style>
    .homepageImageCardsContainer img {
        max-width: 100%;
        display: flex;
        align-items: center;
    }

    .currentImageInCard {
        display: flex;
        object-fit: contain;
        align-items: top;
        justify-content: center;
        width: 100%;
        height: 65vh;
    }

    img {
        border-radius: 10px;
        max-height: 900px;
    }

    .swapImageCardButtonsContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }

    .swapImageCardButtonsContainer button {
        background: none;
        border: none;
    }

    .swapImageCardButtonsContainer .swapImageCardButton {
        padding: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .swapImageCardButtonsContainer .swapImageCardButton:hover {
        cursor: pointer;
        background-color: var(--argentinian-blue);
        border-radius: 5px;
    }

    .swapImageCardButtonsContainer .indexImageCardButton:hover {
        cursor: pointer;
        box-shadow: 2px 2px 6px #000000;
    }

    .swapImageCardButtonsContainer .indexImageCardButton {
        width: 15px;
        height: 15px;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
        background: var(--argentinian-blue);
        border-style: solid;
        border-color: var(--main-text-brown-color);
    }


	h1 {
		font-family: Outfit, serif;
		font-size: 38pt;
		color: var(--main-text-brown-color);
		text-align: center;
        margin-bottom: 10px;
	}

    @media (max-width: 767px) {
        .swapImageCardButtonsContainer {
            margin-bottom: 10px;
        }

        .swapImageCardButtonsContainer .swapImageCardButton {
            padding: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }

        .swapImageCardButtonsContainer .indexImageCardButton {
            width: 12px;
            height: 12px;
            border-radius: 12px;
            padding: 4px;
            margin-left: 5px;
            margin-right: 5px;
        }
    
        h1 {
			font-size: 25pt;
		}

        .currentImageInCard {
            display: flex;
            object-fit: contain;
            align-items: top;
            justify-content: center;
            width: auto;
            height: 60vh;
            padding: 5px;
        }

        .currentImageInCard img {
            width: auto;
            height: auto;
            object-fit: contain;
            max-width:100%;
            max-height:100%;
        }
    }
</style>