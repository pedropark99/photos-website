<script>
    import { locale } from "../stores";
    import InstagramContact from "./instagramContact.svelte";
    import WhatsappContact from "./whatsappContact.svelte";
    import EmailContact from "./emailContact.svelte";

    let local_locale = "Português";
    const translate_call = locale.subscribe((value) => local_locale = value);
    const page_text = {
        English: {
            "contact.header": "CONTACT ME:",
        },
        Português: {
            "contact.header": "ENTRE EM CONTATO:",
        }
    }
</script>


<div class="contactHeader">
    <p>
        <strong>{@html page_text[local_locale]["contact.header"]}</strong>
    </p>
</div>

<div class="contactButtons">
    <InstagramContact />
    <WhatsappContact />
    <EmailContact />
</div>


<style>
    .contactButtons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}

    .contactHeader {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Hanken Grotesk', sans-serif;
		font-weight:normal;
		font-size: 13pt;
		color: #222222;
	}
</style>