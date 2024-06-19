<script>
    import {eventViewId} from './../../stores.js'

    export let thumb_image;
    export let event_name;
    export let event_location;
    export let event_id;

    function viewEvent(id) {
        $eventViewId = id;
        location.assign(`/eventview`);
    }
</script>


<div class=EventThumbItem>
    <button class=EventThumbButton on:click={viewEvent(event_id)}>
        <img src="{thumb_image}" />
        <div class=EventThumbName>{event_name}</div>
        <div class=EventThumbLocation>{event_location}</div>
    </button>
</div>



<style>
    .EventThumbItem {
        width: 360px;
        height: auto;
        place-self: center;
    }

    img {
        object-fit: cover;
        width: 350px;
        height: 350px;
        border-radius: 10px;
    }

    .EventThumbButton .EventThumbLocation {
        color: #222222;
        font-size: 11pt;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: left;
    }

    .EventThumbButton .EventThumbName {
        color: var(--main-text-brown-color);
        text-align: left;
        font-family: Outfit, sans-serif;
        font-weight: bold;
        font-size: 16pt;
        margin-top: 10px;
    }

    .EventThumbButton {
        background: none;
        border: none;
    }

    .EventThumbButton:hover {
        cursor: pointer;
        opacity: 75%;
    }

</style>