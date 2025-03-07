<script>
    import Siema from 'siema';
    import { onMount } from 'svelte';
    import {Fa} from "svelte-fa";
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

    
    export let id;
    export let image_catalog;
    let siema_obj;
    let siema_controller;

    function next_slide() {
        siema_controller.next();
    }

    function prev_slide() {
        siema_controller.prev();
    }

    function goto_image_index(click_event) {
        const index_as_int = parseInt(click_event.target.id);
        siema_controller.goTo(index_as_int);
    }

    function set_button_focus() {
        const buttons = document.getElementsByClassName("indexImageButton");
        const index = siema_controller.currentSlide;
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


    onMount(() => {
        siema_obj = document.getElementById(id);
		siema_controller = new Siema({
			selector: siema_obj,
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
            rtl: false,
            onInit: () => {set_button_focus},
            onChange: () => {set_button_focus},
		})
    })
</script>



<div class="swapImageButtonsContainer">
    <button class="swapImageButton" on:click={prev_slide}>
        <Fa icon={faChevronLeft} size="14pt" color="var(--main-text-brown-color)" />
    </button>

    {#each image_catalog.image_paths as image, index }
        <button id="{index}" class="indexImageButton" on:click={(event) => goto_image_index(event)}/>
    {/each}

    <button class="swapImageButton" on:click={next_slide}>
        <Fa icon={faChevronRight} size="14pt" color="var(--main-text-brown-color)" />
    </button>
</div>


<div class="carouselContainer">
    <div id={id} class="siemaController">
        {#each image_catalog.image_paths as image}
            <div class="carouselSlideContainer">
                <img alt="" src={image}/>
            </div>
        {/each}
    </div>
</div>






<style>

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

    .siemaController {
        margin: 1rem 0;
        height: 70vh;
        width: 60vw;
    }

    .carouselSlideContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .siemaController img {
        width: auto;
        height: auto;
        max-width: 60vw;
        max-height: 70vh;
        object-fit: contain;
        border-radius: 10px;
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

        .siemaController {
            height: 45vh;
            width: 90vw;
        }

        .siemaController img {
            width: auto;
            height: auto;
            max-height: 45vh;
            max-width: 90vw;
        }

        .carouselSlideContainer {
            display: flex;
            object-fit: contain;
            align-items: top;
            justify-content: center;
        }
    }
</style>