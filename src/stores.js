import { writable } from "svelte/store";

export let locale = writable("Português");
locale.update((l) => l);
locale.subscribe((value) => {
	console.log(value);
});

export const locales = ["English", "Português"];

