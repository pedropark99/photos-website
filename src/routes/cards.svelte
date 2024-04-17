<script>
    const images = [
        'street/IMG_8513.jpg',
        'street/IMG_8383.jpg',
        'portraits/IMG_8330.jpg'
    ]
    
    var current_image_index = 0
    let current_image = images[0]
    function next_image() {
        if (current_image_index === images.length) {
            // Do nothing
            return
        }
        
        current_image_index++
        current_image=images[current_image_index];
    }
    function previous_image() {
        if (current_image_index === 0) {
            // Do nothing
            return
        }
        
        current_image_index--
        current_image=images[current_image_index];
    }
</script>


<div class="imageCardsContainer">
    <div class="cardsContainer">
        <img class="mainImageDisplay" src="{current_image}" alt="" width="60%" />
    </div>

    <div class="buttonsContainer">
        <button class="buttonSwitchCard" on:click={previous_image}>←</button>
        <button class="buttonSwitchCard" on:click={previous_image}>→</button>
    </div>
</div>


<style>
    .imageCardsContainer {
		display: grid;
		grid-template-rows: 85% 15%;
        grid-template-columns: 1fr;
		place-items: center;
		text-align: center;
	}
	.buttonSwitchCard {
		color: var(--main-text-brown-color);
        font-size: 25pt;
        background: none;
        border: none;
	}
</style>