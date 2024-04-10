import { writable } from "svelte/store";

export let locale = writable("Português");
locale.update((l) => l);
locale.subscribe((value) => {
	console.log(value);
});

export const locales = ["English", "Português"];

export function translate (content_options, locale, key) {
    let lk;
    if (locale === "Português") {
        lk = "pt";
    } else {
        lk = "en";
    }

    let content = content_options[lk]
    let text = content[key]
    return text
}
