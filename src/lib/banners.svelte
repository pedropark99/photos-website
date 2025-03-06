<script>
    import Banner from '$lib/banner.svelte';
    import { locale } from "../stores";

    let local_locale = "Português";
	const translate_call = locale.subscribe((value) => local_locale = value);

    const banners = [
        {
            img_src: "events/ensaio-rojo-2025/IMG_2770_small_1000.webp",
            Português: {
                h_text: "Retratos",
                p_text: 'Faça um ensaio pessoal e personalizado que captura a sua essência. Seja para melhorar a sua auto-estima sobre você mesmo, ou, para criar recordações do seu "eu" atual.'
            },
            English: {
                h_text: "Portraits",
                p_text: "Create a personal and personalized photo shoot that captures your essence. Whether it's to improve your self-esteem, or, to create memories of your current self."
            }
        },
        {
            img_src: "events/galinheiro-rep-14anos/IMG_0479_small_1000.webp",
            Português: {
                h_text: "Cobertura de eventos",
                p_text: "Registro grandes momentos nos mais diversos tipos de eventos, como aniversários, palestras, formaturas, casamentos e mais."
            },
            English: {
                h_text: "Event coverage",
                p_text: "I record great moments at the most diverse types of events, such as birthdays, lectures, graduations, weddings and more."
            }
        },
        {
            img_src: "IMG_3378_small_1000.webp",
            Português: {
                h_text: "Ensaios corporativos",
                p_text: "Uma boa forma de se posicionar no mercado é ter uma fotografia que comunique quem você é para os seus clientes."
            },
            English: {
                h_text: "Corporate",
                p_text: "A good way to position yourself in the market is to have a photograph that communicates who you are to your customers."
            }
        }
    ];
</script>


<svelte:head>
    {#each banners as banner}
        <link rel="preload" as="image" href={banner.img_src} />
    {/each}
</svelte:head>


<div class="bannerMargin"/>

    {#each banners as banner, index}
        <Banner
            index={index}
            img_src={banner.img_src}
            h_text={banner[local_locale].h_text}
            p_text={banner[local_locale].p_text}
        />
    {/each}

<div class="bannerMargin"/>



<style>
    .bannerMargin {
        height: 40px;
    }
</style>