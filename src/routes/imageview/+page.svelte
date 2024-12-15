<!-- Image Zoom View -->
<script>
	import MainMenu from "../../lib/mainMenu.svelte";
	import CopyrightMessage from "$lib/copyrightMessage.svelte";
	import Footer from "$lib/footer.svelte";
	import is_string from "$lib/utils";
    import {
		isLanguageDropdownOpen,
		isDropdownOpen,
        currentPageImageCatalog,
        locale
	} from './../../stores.js';
    import {Fa} from "svelte-fa";
    import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

    $: image_to_display = $currentPageImageCatalog.get_image();
    const url_params = new URLSearchParams(window.location.search);
    const origin = url_params.get("origin");
    const originUrl = "/" + origin;
    const keyLeft = 37;
    const keyRight = 39;

    const origin_names_titles = {
        "street": {
            "Português": "VOLTAR PARA FOTOGRAFIA DE RUA",
            "English": "GO BACK TO STREET PHOTOGRAPHY"
        },
        "portrait": {
            "Português": "VOLTAR PARA RETRATOS",
            "English": "GO BACK TO PORTRAITS"
        }
    }
    function get_origin_name() {
        return origin_names_titles[origin][$locale];
    }

    function swap_image(event) {
        if (event.keyCode === keyLeft) {
            previous_image();
        }
        if (event.keyCode === keyRight) {
            next_image();
        }
    }

    function next_image() {
        $currentPageImageCatalog.next_image();
        image_to_display = $currentPageImageCatalog.get_image();
    }

    function previous_image() {
        $currentPageImageCatalog.previous_image();
        image_to_display = $currentPageImageCatalog.get_image();
    }

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

<div class="app" on:click={ (event) => {closeMenuWithClickOutside(event)} }>
	<MainMenu/>

    <div class="goBackLink">
        <a href="{originUrl}">
        <Fa icon={faArrowLeft} color="var(--main-text-brown-color)" size="15pt"/>
        {@html get_origin_name()}
        </a>
    </div>

    <div class="imageZoomDisplay">
        <div>
            <button class="swapImageButton" on:click={previous_image}>
            <Fa icon={faChevronLeft}
                color="var(--main-text-brown-color)"
                size="35pt" />
            </button>
        </div>
        <div><img src="{image_to_display}" /></div>
        <div>
            <button class="swapImageButton" on:click={next_image}>
            <Fa icon={faChevronRight}
                color="var(--main-text-brown-color)"
                size="35pt" />
            </button>
        </div>
    </div>

	<CopyrightMessage />

	<Footer />
</div>


<svelte:window on:keydown={swap_image} />




<style>
    .imageZoomDisplay {
        display: grid;
        grid-template-columns: 10vw 75vw 10vw;
        padding: 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0;
    }

    .swapImageButton {
        background-color: transparent;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
	    outline: inherit;
    }

    .swapImageButton:hover {
        border-radius: 10px;
        background-color: var(--moonstone-blue);
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 25px;
        padding-bottom: 25px;
    }

    img {
        border-radius: 15px;
        max-height: 75vh;
    }

    .goBackLink {
        margin-top: 30px;
        margin-bottom: 30px;
        color: var(--main-text-brown-color);
        text-decoration-line: underline;
    }
    .goBackLink:hover {cursor: pointer;}
    a {
        color: inherit;
        text-decoration: none;
    }
</style>