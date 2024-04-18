<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Modal from './Modal.svelte';
    let showModal = false;
    const images = [
        'street/IMG_8513.jpg',
        'street/IMG_8383.jpg',
        'portraits/IMG_8330.jpg'
    ]
    
    var current_image_index = 0;
    let current_image = images[0];
    
    $: current_image;
    
    
    function set_current_image_focus() {
        var buttons = document.getElementsByClassName("buttonSwitchCard");
        buttons[current_image_index].focus();
    }
    onMount(() => { set_current_image_focus() });
    
    function next_image() {
        if (current_image_index === (images.length - 1)) {
            current_image_index = 0;
            current_image = images[current_image_index];
            set_current_image_focus();
            return
        }
        
        current_image_index++;
        current_image = images[current_image_index];
        set_current_image_focus();
    }
    
    function previous_image() {
        if (current_image_index === 0) {
            current_image_index = (images.length - 1)
            current_image = images[current_image_index];
            set_current_image_focus();
            return
        }
        
        current_image_index--;
        current_image = images[current_image_index];
        set_current_image_focus();
    }
    
    function switch_image_focus(button_elem) {
        const index_as_int = parseInt(button_elem.target.id);
        current_image_index = index_as_int;
        current_image = images[current_image_index];
        set_current_image_focus();
    }

    function zoom_over_image(image_node) {

    }
</script>


<div class="imageCardsContainer">    

    <div class="buttonsContainer">
        
        <button class="arrowSwitchCard" on:click={previous_image}>←</button>
        {#each images as image, index }
        <button id="{index}" class="buttonSwitchCard" on:click={(event) => switch_image_focus(event)}></button>
        {/each}
        <button class="arrowSwitchCard" on:click={next_image}>→</button>
        
    </div>


    {#key current_image}
    <div class="cardsContainer" in:fade={{delay:50, duration:700}}>
        <img class="mainImageDisplay" src="{current_image}" alt="" width="60%" on:click={() => (showModal = true)}/>
    </div>

    <Modal bind:showModal>
        <img class="imageInModal" src="{current_image}" alt="" width="100%" />
    </Modal>
    
    {/key}

</div>


<style>
    .imageCardsContainer {
        display: grid;
        grid-template-rows: 10% 90%;
        grid-template-columns: 1fr;
        gap: 10px;
        place-items: center;
        text-align: center;
        margin-bottom: 50px;
    }

    .imageInModal {
        max-height: 1200px;
    }
    
    .cardsContainer img {
        width: auto;
        height: 500px;
        border-radius: 10px;
        transition: 0.25s;
    }
    
    .cardsContainer img:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    
    .arrowSwitchCard {
        color: var(--argentinian-blue);
        font-size: 28pt;
        background: none;
        border: none;
        margin-left: 20px;
        margin-right: 20px;
    }

    .arrowSwitchCard:hover {
        -ms-transform: translateY(-10%);
        transform: translateY(-10%);
        cursor: pointer;
        height: 40px;
        background-color: var(--main-text-brown-color);
        border-radius: 5px;
    }
    
    .buttonsContainer {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 0;
        border: 0;
    }
    
    .buttonSwitchCard {
        height: 15px;
        width: 15px;
        background-color: #adadad;
        border: none;
        border-radius: 50%;
        display: inline-block;
        margin: 5px;
    }
    
    .buttonSwitchCard:hover {
        cursor: pointer;
        box-shadow: 2px 2px 6px #000000;
    }
    
    .buttonSwitchCard:active {
        background-color: var(--argentinian-blue);
        border: #222222;
    }
    
    .buttonSwitchCard:focus {
        background-color: var(--argentinian-blue);
        border: #222222;
    }
    

    

    

    
</style>