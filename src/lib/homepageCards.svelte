<script>
    import { imageCatalog } from './image_catalog';
    import { currentPageImageCatalog, locale } from '../stores';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import {Fa} from "svelte-fa";
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

    import sImg1 from './street/img1.webp';
    import sImg2 from './street/img2.webp';
    import sImg3 from './street/img3.webp';
    import sImg5 from './street/img5.webp';
    import sImg7 from './street/img7.webp';
    import sImg8 from './street/img8.webp';
    import sImg9 from './street/img9.webp';
    import sImg16 from './street/img16.webp';
    import sImg18 from './street/img18.webp';
    import sImg23 from './street/img23.webp';
    import pImg2 from './portraits/img2.webp';
    import pImg4 from './portraits/img4.webp';
    import pImg5 from './portraits/img5.webp';
    import pImg3 from './portraits/img3.webp';

    const images_desktop = [
        sImg1,
        sImg2,
        sImg3,
        sImg5,
        sImg7,
        sImg8,
        pImg2,
        pImg5,
        pImg4,
    ]
    const images_mobile = [
        pImg2,
        sImg9,
        pImg3,
        sImg18,
        sImg23,
        pImg4,
        pImg5,
        sImg16,
    ]
    var images = images_desktop;
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
    
        if (window.innerWidth < 767) {
            images = images_mobile;
        } else {
            images = images_desktop;
        }
        $currentPageImageCatalog = new imageCatalog(images[0], images);
    })
</script>


<div class="homepageImageCardsContainer">
    {#if ready}
        <h1 transition:fade={{duration:500}}>{@html page_text[$locale]["top.message"]}</h1>
    {/if}
    <div class="swapImageCardButtonsContainer">
        <button class="swapImageCardButton" on:click={previous_image}>
            <Fa icon={faChevronLeft} size="14pt" color="var(--main-text-brown-color)" />
        </button>

        {#each images as image, index }
            <button id="{index}" class="indexImageCardButton" on:click={(click_event) => change_to_image_index(click_event)}>
            </button>
        {/each}

        <button class="swapImageCardButton" on:click={next_image}>
            <Fa icon={faChevronRight} size="14pt" color="var(--main-text-brown-color)" />
        </button>
    </div>

    {#key image_to_display}
        <div class="currentImageInCard" in:fade={{delay:50, duration:700}}>
            <enhanced:img class="imageInCard" alt="" src="{image_to_display}">
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