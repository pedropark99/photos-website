<script>
    import {eventViewId} from '../stores.js';
    import {goto} from "$app/navigation";

    export let thumb_image;
    export let event_name;
    export let event_location;
    export let event_id;


    function viewEvent(id) {
        $eventViewId = id;
        goto(`/eventview`);
    }
</script>


<div class=EventThumbItem>
    <button class=EventThumbButton on:click={viewEvent(event_id)}>
        <img class=EventThumbImage alt="" src="{thumb_image}" />
        <div class=EventThumbName>{event_name}</div>
        <div class=EventThumbLocation>{event_location}</div>
    </button>
</div>



<style>
    .EventThumbItem {
        width: 250px;
        height: auto;
        place-self: top;
    }

    img {
        object-fit: cover;
        width: 240px;
        height: 240px;
        border-radius: 8px;
    }

    .EventThumbButton .EventThumbLocation {
        color: #222222;
        font-size: 9pt;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: left;
    }

    .EventThumbButton .EventThumbName {
        color: var(--main-text-brown-color);
        text-align: left;
        font-family: Outfit, sans-serif;
        font-weight: bold;
        font-size: 13pt;
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


    @media (max-width: 767px) {
        .EventThumbItem {
            width: 330px;
            height: auto;
            place-self: center;
        }

        img {
            object-fit: cover;
            width: 320px;
            height: 320px;
            border-radius: 10px;
        }
    }

</style>