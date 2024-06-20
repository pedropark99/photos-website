<script>
    import { imageCatalog } from './image_catalog';
    import { currentPageImageCatalog, locale } from '../stores';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import {Fa} from "svelte-fa";
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

    const images = [
        'street/IMG_8513.jpg',
        'street/IMG_8383.jpg',
        'portraits/IMG_8330.jpg',
        'portraits/IMG_8420.jpg',
        'street/IMG_7605.jpg',
        'street/IMG_8589.jpg',
        'street/IMG_7831.jpg'
    ]
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
        set_image_focus(false);
        $currentPageImageCatalog.set_current_image_with_index(index_as_int);
        image_to_display = $currentPageImageCatalog.get_image();
        set_image_focus(true);
    }

    function set_image_focus(invert) {
        const buttons = document.getElementsByClassName("indexImageCardButton");
        let button_to_change = buttons[$currentPageImageCatalog.current_index];
        if (invert) {
            button_to_change.style.background = "var(--main-text-brown-color)";
            button_to_change.style.borderColor = "var(--argentinian-blue)";
        } else {
            button_to_change.style.background = "var(--argentinian-blue)";
            button_to_change.style.borderColor = "var(--main-text-brown-color)";
        }
    }

    function next_image() {
        set_image_focus(false);
        $currentPageImageCatalog.next_image();
        image_to_display = $currentPageImageCatalog.get_image();
        set_image_focus(true);
    }

    function previous_image() {
        set_image_focus(false);
        $currentPageImageCatalog.previous_image();
        image_to_display = $currentPageImageCatalog.get_image();
        set_image_focus(true);
    }

    let ready = false;
    onMount(() => {
        // This makes the h1 transition work
        ready = true;
        set_image_focus(true);
    })
</script>


<div class="homepageImageCardsContainer">
    {#if ready}
        <h1 transition:fade={{duration:500}}>{@html page_text[$locale]["top.message"]}</h1>
    {/if}
    <div class="swapImageCardButtonsContainer">
        <button class="swapImageCardButton" on:click={previous_image}>
            <Fa icon={faChevronLeft} size="15pt" color="var(--main-text-brown-color)" />
        </button>

        {#each images as image, index }
            <button id="{index}" class="indexImageCardButton" on:click={(click_event) => change_to_image_index(click_event)}>
            </button>
        {/each}

        <button class="swapImageCardButton" on:click={next_image}>
            <Fa icon={faChevronRight} size="15pt" color="var(--main-text-brown-color)" />
        </button>
    </div>

    <div class="currentImageInCard">
        <img transition:fade class="imageInCard" src="{image_to_display}">
    </div>
</div>


<style>
    .homepageImageCardsContainer {
        width: 100%;
    }

    .homepageImageCardsContainer img {
        object-fit: contain;
        max-height: 70vh;
        height: 100%;
        width: 100%;
    }

    img {
        border-radius: 10px;
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
        background-color: var(--moonstone-blue);
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
        .swapImageCardButtonsContainer .swapImageCardButton {
            padding: 10px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .swapImageCardButtonsContainer .indexImageCardButton {
            padding: 5px;
            margin: 8px;
        }
    
        h1 {
			font-size: 25pt;
		}
    }
</style>