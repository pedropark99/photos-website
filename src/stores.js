import { writable } from "svelte/store";
import { imageCatalog } from "$lib/image_catalog";

export const locales = ["English", "Português"];
export let locale = writable("Português");
export let isDropdownOpen = writable(false);
export let isLanguageDropdownOpen = writable(false);
export let eventViewId = writable(0);
export let displayImageZoom = writable(false);
export let automatic_carousel = writable(true);
export let imageSelected = writable("");
export let currentPageImageCatalog = writable(new imageCatalog(0, []));



locale.update((l) => l);
isDropdownOpen.update((d) => d);
isLanguageDropdownOpen.update((d) => d);
eventViewId.update((d) => d);
currentPageImageCatalog.update((d) => d);
displayImageZoom.update((d) => d);
imageSelected.update((d) => d);

