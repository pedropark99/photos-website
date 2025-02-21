<script>
    import { imageCatalog } from './image_catalog';
    import { currentPageImageCatalog, locale } from '../stores';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import {Fa} from "svelte-fa";
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
    import {
        images_desktop,
        images_mobile,
        images_to_preload
    } from '../data/homepage_cards_data.js';
    
    var images = images_desktop;
    let automatic_slideshow = true;
    $currentPageImageCatalog = new imageCatalog(0, images);

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
        $currentPageImageCatalog.set_current_image_with_index(index_as_int);
        image_to_display = $currentPageImageCatalog.get_image();
    
        set_button_focus();
    }

    function slideshow() {
        if (automatic_slideshow) {
            next_image();
        }
    }

    function next_image() {
        if (typeof $currentPageImageCatalog.current_index !== 'undefined') {
            const img_index = $currentPageImageCatalog.current_index;
            if ((img_index + 1) >= $currentPageImageCatalog.image_paths.length) {
                $currentPageImageCatalog.set_current_image_with_index(0);
            } else {
                $currentPageImageCatalog.next_image();
            }
            image_to_display = $currentPageImageCatalog.get_image();

            set_button_focus();
        }
    }

    function previous_image() {
        if (typeof $currentPageImageCatalog.current_index !== 'undefined') {
            const img_index = $currentPageImageCatalog.current_index;
            const len = $currentPageImageCatalog.image_paths.length;
            if ((img_index -1) < 0) {
                $currentPageImageCatalog.set_current_image_with_index(len - 1);
            } else {
                $currentPageImageCatalog.previous_image();
            }
            image_to_display = $currentPageImageCatalog.get_image();

            set_button_focus();
        }
    }

    function click_previous_image() {
        automatic_slideshow = false;
        previous_image();
    }

    function click_next_image() {
        automatic_slideshow = false;
        next_image();
    }

    function set_button_focus() {
        const buttons = document.getElementsByClassName("indexImageCardButton");
        const index = $currentPageImageCatalog.current_index;
        const length = $currentPageImageCatalog.image_paths.length;
        if (length === 0) {
            return;
        }

        for (let i = 0; i < length; i++) {
            buttons[i].classList.remove("active");
        }
    
        if (typeof index !== 'undefined' && buttons.length > 0) {
            let button_to_change = buttons[index];
            button_to_change.classList.add("active");
        }
    }

    let ready = false;
    onMount(() => {
        // This makes the h1 transition work
        ready = true;
        if (window.innerWidth < 767) {
            images = images_mobile;
        } else {
            images = images_desktop;
        }
        $currentPageImageCatalog = new imageCatalog(0, images);

        set_button_focus();
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

    .swapImageCardButtonsContainer button.swapImageCardButton {
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

    .indexImageCardButton:hover {
        cursor: pointer;
        box-shadow: 2px 2px 6px #000000;
    }


    .indexImageCardButton {
        width: 15px;
        height: 15px;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
        background: var(--argentinian-blue);
        border-style: solid;
        border-color: var(--main-text-brown-color);
    }

    :global(.indexImageCardButton.active) {
        background: var(--main-text-brown-color) !important;
        border-color: var(--argentinian-blue) !important;
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