<script>
    import MainMenu from "../../lib/mainMenu.svelte";
    import EventThumb from "../../lib/eventThumb.svelte";
	import is_string from "$lib/utils";
	import { onMount } from "svelte";
    import * as eventsJson from './events.json';
	import { isLanguageDropdownOpen, isDropdownOpen, locale } from './../../stores.js'

    let events_to_display = eventsJson.events_list;
	onMount(() => {
		document.getElementById("events-button").style.textDecoration = "underline 1pt solid #222222";
	})

	function closeMenuWithClickOutside(event) {
		const container_class = "mobileMenuDropdownContainer";
		const content_class = "dropdownContent";
		const button_class = "mobileButtonDropdown";
		const language_class = "mobileLanguageButtonDropdown";
		
		const element_clicked = event.target.className;
		if (!is_string(element_clicked)) {
			return
		}
		const inside_container = (
			element_clicked.includes(container_class) ||
			element_clicked.includes(button_class) ||
			element_clicked.includes(content_class) ||
			element_clicked.includes(language_class)
		)
		if (inside_container) {
				// Do nothing
				return
		}

		$isDropdownOpen = false;
		$isLanguageDropdownOpen = false;
	}

</script>




<div class="app"  on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

	<div class="pageContent">
		<div class="leftEmptySpace"></div>

		<div class="actualPageContent">
            <div class="eventsThumbGrid">
                {#each events_to_display as event}
                    <EventThumb
                        event_id={event.id}
                        thumb_image={event.thumb_image}
                        event_name={event.event_name[$locale]}
                        event_location={event.event_location}
                    />
                {/each}
            </div>

			<div class="copyrightMessage">&copy Copyright Pedro Faria.</div>
		</div>

		<div class="leftEmptySpace"></div>
	</div>
</div>



<style>
    .pageContent {
        display: grid;
        grid-template-columns: 10% 80% 10%;
    }

    .actualPageContent {
        margin-top: 75px;
    }

    .eventsThumbGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: max-content;
        row-gap: 40px;
    }

	.copyrightMessage {
		margin-top: 60px;
		margin-bottom: 30px;
	}


	@media (max-width: 767px) {
		.pageContent {
			display: grid;
			grid-template-columns: 3% 94% 3%;
		}

		.actualPageContent {
			margin-top: 40px;
		}

		.eventsThumbGrid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: max-content;
			row-gap: 40px;
		}
	}
</style>