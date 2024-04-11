import { writable } from "svelte/store";

export const locales = ["English", "Português"];
export let locale = writable("Português");
locale.update((l) => l);
locale.subscribe((value) => {
	console.log(value);
});
