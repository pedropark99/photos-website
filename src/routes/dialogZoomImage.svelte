<script>
    import {Fa} from "svelte-fa";
    import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
    import {onMount} from 'svelte';
    import {imageToZoom, displayImageZoom} from './../stores.js';

    let dialog;
    $: image_to_display = $imageToZoom.get_image();
    onMount(() => {
        dialog = document.getElementsByClassName("modalImageZoom")[0];
        if ($displayImageZoom) {
            dialog.showModal();
        }
    })

    function close_modal(clicked_node) {
        dialog.close();
        $displayImageZoom = false;
    }

    function next_image() {
        $imageToZoom.next_image()
        image_to_display = $imageToZoom.get_image();
    }
    function previous_image() {
        $imageToZoom.previous_image()
        image_to_display = $imageToZoom.get_image();
    }
</script>


<dialog class="modalImageZoom" bind:this={dialog}>
    <div class="swapModalButtonContainer" >
        <button class="swapModalButton" on:click={previous_image}>
            <Fa icon={faChevronLeft} color="#222222" size="30pt"/>
        </button>
    </div>

    <div class="imageInModalContainer" on:click={close_modal}>
        <div><button class="closeModalButton">
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


<style>
    dialog {
        display: grid;
        grid-template-columns: 1fr 8fr 1fr;
        grid-template-rows: 90%;
        height: 100%;
        width: 100%;
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
        padding-bottom: 10px;
        border: none;
        background: none;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 767px) {
    }
</style>