<script>
    import MainMenu from "../../lib/mainMenu.svelte";
    import EventThumb from "../../lib/eventThumb.svelte";
	import is_string from "$lib/utils";
	import { onMount } from "svelte";
    import * as eventsJson from '../../data/events.json';
	import { isLanguageDropdownOpen, isDropdownOpen, locale } from './../../stores.js'
    import CopyrightMessage from "$lib/copyrightMessage.svelte";
    import Footer from "$lib/footer.svelte";

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

			<CopyrightMessage />

		</div>

		<div class="rightEmptySpace"></div>
	</div>



	<Footer />
</div>



<style>
    .pageContent {
        display: grid;
		width: 100%;
    }

    .actualPageContent {
        margin-top: 75px;
    }

    .eventsThumbGrid {
        display: flex;
		justify-content: center;
		align-content: space-between;
		flex-wrap: wrap;
        row-gap: 40px;
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