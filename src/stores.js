import { writable } from "svelte/store";
import { imageCatalog } from "$lib/image_catalog";

export const locales = ["English", "Português"];
export let locale = writable("Português");
export let isDropdownOpen = writable(false);
export let isLanguageDropdownOpen = writable(false);
export let eventViewId = writable(0);
export let displayImageZoom = writable(false);
export let imageToZoom = writable(new imageCatalog("", []));


locale.update((l) => l);
locale.subscribe((value) => {
	
});


isDropdownOpen.update((d) => d);
isDropdownOpen.subscribe((value) => {
	
});

isLanguageDropdownOpen.update((d) => d);
isLanguageDropdownOpen.subscribe((value) => {
	
});

eventViewId.update((d) => d);
eventViewId.subscribe((value) => {
	
});

imageToZoom.update((d) => d);
imageToZoom.subscribe((value) => {
	
});

displayImageZoom.update((d) => d);
displayImageZoom.subscribe((value) => {
	
});