import { writable } from "svelte/store";

export const locales = ["English", "Português"];
export let locale = writable("Português");
export let isDropdownOpen = writable(false);


locale.update((l) => l);
locale.subscribe((value) => {
	console.log(value);
});


isDropdownOpen.update((d) => d);
isDropdownOpen.subscribe((value) => {
	console.log(value);
});
