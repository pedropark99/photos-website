<script>
    import { fade } from 'svelte/transition';
    import {Fa} from "svelte-fa";
    import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
    import {onMount} from 'svelte';
    import {currentPageImageCatalog, displayImageZoom} from '../stores.js';
    import {is_mobile_context} from './utils.js';

    let dialog;
    let mobile_dialog;
    onMount(() => {
        if (is_mobile_context()) {
            mobile_dialog = document.getElementsByClassName("mobileModalImageZoom")[0];
            if ($displayImageZoom) {
                mobile_dialog.showModal();
            }
        } else {
            dialog = document.getElementsByClassName("modalImageZoom")[0];
            if ($displayImageZoom) {
                dialog.showModal();
            }
        }
    })

    function close_dialog() {
        dialog.close();
        $displayImageZoom = false;
    }

    function close_mobile_dialog() {
        mobile_dialog.close();
        $displayImageZoom = false;
    }

    $: image_to_display = $currentPageImageCatalog.get_image();
    function next_image() {
        $currentPageImageCatalog.next_image()
        image_to_display = $currentPageImageCatalog.get_image();
    }
    function previous_image() {
        $currentPageImageCatalog.previous_image()
        image_to_display = $currentPageImageCatalog.get_image();
    }
</script>






<dialog class="modalImageZoom" bind:this={dialog} transition:fade={{ duration:150 }}>
    <div class="swapModalButtonContainer" >
        <button class="swapModalButton" on:click={previous_image}>
            <Fa icon={faChevronLeft} color="#222222" size="30pt"/>
        </button>
    </div>

    <div class="imageInModalContainer" on:click={close_dialog}>
        <div><button class="closeModalButton" on:click={close_dialog}>
            <Fa icon={faXmark} size= "30pt" color="#8f8f8f"/>
        </button></div>
        <img src="{image_to_display}" alt="" />
    </div>

    <div class="swapModalButtonContainer" >
        <button class="swapModalButton" on:click={next_image}>
            <Fa icon={faChevronRight} color="#222222" size="30pt"/>
        </button>
    </div>
</dialog>







<dialog class="mobileModalImageZoom" bind:this={mobile_dialog} transition:fade={{ duration:150 }}>
    <div class="mobileModalButtonsContainer">
        <div class="swapModalButtonContainer" >
            <button class="swapModalButton" on:click={previous_image}>
                <Fa icon={faChevronLeft} color="#222222" size="20pt"/>
            </button>
        </div>
    
        <div>
            <button class="closeModalButton" on:click={close_mobile_dialog}>
                <Fa icon={faXmark} size= "20pt" color="#8f8f8f"/>
            </button>
        </div>
    
        <div class="swapModalButtonContainer" >
            <button class="swapModalButton" on:click={next_image}>
                <Fa icon={faChevronRight} color="#222222" size="20pt"/>
            </button>
        </div>
    </div>


    <div class="imageInModalContainer" on:click={close_mobile_dialog}>
        <img src="{image_to_display}" alt="" />
    </div>
</dialog>









<style>
    .mobileModalImageZoom { display: none; }
    .modalImageZoom {
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        grid-template-rows: 90%;
        height: 100%;
        width: 100vw;
        margin: 10px;
        padding: 0;
        border: none;
        place-content: center;
        border: none !important;
        background-color: rgba(255, 255, 255, 0.9);
    }

    .swapModalButtonContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: none;
        background: none;
    }

    .imageInModalContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 5px;
    }

    .imageInModal img:hover {
        cursor: pointer;
    }

    .swapModalButton {
        padding: 10px;
        border: none;
        background: none;
    }

    .closeModalButton {
        margin-bottom: 10px;
        border: none;
        background: none;
    }

    button {
        cursor: pointer;
    }



    @media (max-width: 767px) {
        .modalImageZoom { display: none; }
        .mobileModalImageZoom {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 70px 1fr;
            height: 90%;
            width: 100%;
            padding: 0;
            border: none;
            place-content: center;
            border: none !important;
            background-color: rgba(255, 255, 255, 0.9);
        }

        .closeModalButton {
            padding: 0;
            margin: 0;
        }

        .mobileModalButtonsContainer {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .swapModalButton {
            margin-left: 40px;
            margin-right: 40px;
        }
    }
</style>