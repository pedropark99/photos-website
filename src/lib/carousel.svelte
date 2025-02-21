<script>
    import { imageCatalog } from './image_catalog.js';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import {Fa} from "svelte-fa";
    import { automatic_carousel } from './../stores.js';
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

    
    export let id;
    export let image_catalog = new imageCatalog(0, []);
    $: image_to_display = image_catalog.get_image();

    
    let interval_id;
    const index_button_class = "indexImageButton" + " " + id;

    function goto_image_index(click_event) {
        const index_as_int = parseInt(click_event.target.id);
        $automatic_carousel = false;
        image_catalog.set_current_image_with_index(index_as_int);
        image_to_display = image_catalog.get_image();

        set_button_focus();
    }

    function next_image() {
        if (typeof image_catalog.current_index !== 'undefined') {
            const img_index = image_catalog.current_index;
            const len = image_catalog.image_paths.length;
            if ((img_index + 1) >= len) {
                image_catalog.set_current_image_with_index(0);
            } else {
                image_catalog.next_image();
            }
            image_to_display = image_catalog.get_image();
        }

        set_button_focus();
    }


    function previous_image() {
        if (typeof image_catalog.current_index !== 'undefined') {
            const img_index = image_catalog.current_index;
            const len = image_catalog.image_paths.length;
            if ((img_index -1) < 0) {
                image_catalog.set_current_image_with_index(len - 1);
            } else {
                image_catalog.previous_image();
            }
            image_to_display = image_catalog.get_image();
        }

        set_button_focus();
    }

    function click_previous_image() {
        $automatic_carousel = false;
        previous_image();
    }

    function click_next_image() {
        $automatic_carousel = false;
        next_image();
    }

    function set_button_focus() {
        console.log("Entering focus " + id)
        const buttons = document.getElementsByClassName(index_button_class);
        const index = image_catalog.current_index;
        const length = image_catalog.image_paths.length;
        if (length === 0 || buttons.length === 0) {
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

    function slideshow() {
        console.log("Entering slideshow " + id)
        if ($automatic_carousel) {
            next_image();
        } else {
            console.log("Hora de parar " + id)
            clearInterval(interval_id);
        }
    }

    onMount(() => {
        set_button_focus();
        interval_id = setInterval(slideshow, 6000);
    })
</script>



<div class="carouselContainer">
    <div class="swapImageButtonsContainer">
        <button class="swapImageButton {id}" on:click={click_previous_image}>
            <Fa icon={faChevronLeft} size="14pt" color="var(--main-text-brown-color)" />
        </button>

        {#each image_catalog.image_paths as image, index }
            <button id="{index}" class="indexImageButton {id}" on:click={(click_event) => goto_image_index(click_event)}>
            </button>
        {/each}

        <button class="swapImageButton {id}" on:click={click_next_image}>
            <Fa icon={faChevronRight} size="14pt" color="var(--main-text-brown-color)" />
        </button>
    </div>

    {#key image_to_display}
        <div class="currentImageInCarousel {id}" in:fade={{delay:0, duration:300}}>
            <img class="imageInCarousel {id}" alt="" src={image_to_display}>
        </div>
    {/key}
</div>




<style>
    .carouselContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .carouselContainer img {
        max-width: 100%;
        display: flex;
        object-fit: contain;
    }

    img {
        border-radius: 10px;
        max-height: 900px;
    }

    .currentImageInCarousel {
        display: flex;
        object-fit: contain;
        align-items: top;
        justify-content: center;
        width: 100%;
        height: 65vh;
    }

    .swapImageButtonsContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }

    .swapImageButtonsContainer button.swapImageButton {
        background: none;
        border: none;
    }

    .swapImageButtonsContainer .swapImageButton {
        padding: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .swapImageButtonsContainer .swapImageButton:hover {
        cursor: pointer;
        background-color: var(--argentinian-blue);
        border-radius: 5px;
    }

    .indexImageButton:hover {
        cursor: pointer;
        box-shadow: 2px 2px 6px #000000;
    }

    .indexImageButton {
        width: 15px;
        height: 15px;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
        background: var(--argentinian-blue);
        border-style: solid;
        border-color: var(--main-text-brown-color);
    }

    :global(.indexImageButton.active) {
        background: var(--main-text-brown-color) !important;
        border-color: var(--argentinian-blue) !important;
    }


    @media (max-width: 767px) {
        .swapImageButtonsContainer {
            margin-bottom: 10px;
        }

        .swapImageButtonsContainer .swapImageButton {
            padding: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }

        .swapImageButtonsContainer .indexImageButton {
            width: 12px;
            height: 12px;
            border-radius: 12px;
            padding: 4px;
            margin-left: 5px;
            margin-right: 5px;
        }

        .currentImageInCarousel {
            display: flex;
            object-fit: contain;
            align-items: top;
            justify-content: center;
            width: auto;
            height: 60vh;
            padding: 5px;
        }

        .currentImageInCarousel img {
            width: auto;
            height: auto;
            object-fit: contain;
            max-width:100%;
            max-height:100%;
        }

        :global(.indexImageButton.active) {
            background: var(--main-text-brown-color) !important;
            border-color: var(--argentinian-blue) !important;
        }

        .swapImageButton:hover, .swapImageButton:active {
            background-color: var(--argentinian-blue) !important;
            border-radius: 5px !important;
        }
    }
</style>