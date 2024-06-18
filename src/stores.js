import { writable } from "svelte/store";

export const locales = ["English", "Português"];
export let locale = writable("Português");
export let isDropdownOpen = writable(false);
export let isLanguageDropdownOpen = writable(false);
export let eventViewId = writable(0);


locale.update((l) => l);
locale.subscribe((value) => {
	console.log(value);
});


isDropdownOpen.update((d) => d);
isDropdownOpen.subscribe((value) => {
	console.log(value);
});

isLanguageDropdownOpen.update((d) => d);
isLanguageDropdownOpen.update((value) => {
	console.log(value)
});

eventViewId.update((d) => d);
eventViewId.subscribe((value) => {
	console.log(value);
});
