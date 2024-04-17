<script>
    import { onMount } from 'svelte';
    const images = [
        'street/IMG_8513.jpg',
        'street/IMG_8383.jpg',
        'portraits/IMG_8330.jpg'
    ]
    
    var current_image_index = 0
    let current_image = images[0]
    onMount(() => {
        var buttons = document.getElementsByClassName("buttonSwitchCard");
        buttons[current_image_index].focus();
    });


    function next_image() {
        if (current_image_index === images.length) {
            // Do nothing
            return
        }
        
        current_image_index++
        current_image = images[current_image_index];
        var buttons = document.getElementsByClassName("buttonSwitchCard");
        buttons[current_image_index].focus();
    }

    function previous_image() {
        if (current_image_index === 0) {
            // Do nothing
            return
        }
        
        current_image_index--
        current_image = images[current_image_index];
        var buttons = document.getElementsByClassName("buttonSwitchCard");
        buttons[current_image_index].focus();
    }

    function switch_image_focus(button_elem) {
        var buttons = document.getElementsByClassName("buttonSwitchCard");
        var index_as_int = parseInt(button_elem.target.id);
        buttons[index_as_int].focus();

        current_image_index = index_as_int;
        current_image = images[current_image_index];
    }
</script>


<div class="imageCardsContainer">
    <div class="cardsContainer">
        <img class="mainImageDisplay" src="{current_image}" alt="" width="60%" />
    </div>

    <div class="buttonsContainer">

            <button class="arrowSwitchCard" on:click={previous_image}>←</button>
            {#each images as image, index }
                <button id="{index}" class="buttonSwitchCard" on:click={(event) => switch_image_focus(event)}></button>
            {/each}
            <button class="arrowSwitchCard" on:click={next_image}>→</button>
        
    </div>
</div>


<style>
    .imageCardsContainer {
		display: grid;
		grid-template-rows: 85% 15%;
        grid-template-columns: 1fr;
        padding-top: 20px;
        gap: 10px;
		place-items: center;
		text-align: center;
	}

    .cardsContainer img {
        width: auto;
        height: 500px;
        border-radius: 10px;
    }

	.arrowSwitchCard {
		color: var(--argentinian-blue);
        font-size: 28pt;
        background: none;
        border: none;
        margin-left: 20px;
        margin-right: 20px;
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
    }

    .buttonSwitchCard:active {
        background-color: var(--argentinian-blue);
        border: #222222;
    }

    .buttonSwitchCard:focus {
        background-color: var(--argentinian-blue);
        border: #222222;
    }

    .arrowSwitchCard:hover {
        cursor: pointer;
        background-color: var(--main-text-brown-color);
        border-radius: 5px;
	}


</style>