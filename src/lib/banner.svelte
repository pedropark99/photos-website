<script lang="ts">
    import { fade, slide, fly } from "svelte/transition";
    import { onMount } from "svelte";

    let y = 0;
    let viewport_height = 400;
    let id = "banner1";
    export let img_src;
    export let index = 0;
    export let h_text;
    export let p_text;

    if (index % 2 != 0) {
        id = "banner2";
    }

    onMount(() => {
        if (window.innerWidth < 767) {
            viewport_height = window.innerHeight / 1.5;
        } else {
            viewport_height = (window.innerHeight / 2.5);
        }
    })

</script>

<svelte:window bind:scrollY={y} />


{#if y >= ((index + 1) * viewport_height)}
    <span transition:fade={{ duration: 300 }}>
    <div id="{id}" class="homepageBanner" transition:slide={{ duration: 350, axis: 'x' }}>
        {#if id === "banner1"}

            <div id="{id}" class="bannerImageContainer">
                <img alt="" src="{img_src}" />
            </div>

            <div id="{id}" class="textInBanner">
                <h1>{h_text}</h1>
                <p>
                    {p_text}
                </p>
            </div>
        {:else}
            <div id="{id}" class="textInBanner">
                <h1>{h_text}</h1>
                <p>
                    {p_text}
                </p>
            </div>

            <div id="{id}" class="bannerImageContainer">
                <img alt="" src="{img_src}" />
            </div>
        {/if}
    </div>
    </span>
{/if}




{#if y >= ((index + 1) * viewport_height)}
    <div id="{id}" class="homepageMobileBanner" in:fly={{ duration: 350, x: -40 }} out:fade>
        <div id="{id}" class="bannerImageContainer">
            <img alt="" src="{img_src}" />
        </div>

        <div id="{id}" class="textInBanner">
            <h1>{h_text}</h1>
            <p>
                {p_text}
            </p>
        </div>
    </div>
{/if}





<style>
    .homepageMobileBanner {display: none}
    .homepageBanner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        width: 100vw;
    }



    #banner1 {
        background-color: var(--main-text-brown-color);
    }

    .bannerImageContainer {
        height: 80%;
        padding: 40px;
    }

    h1 {
        font-family: Outfit, serif;
		font-size: 40pt;
		font-weight: bold;
        line-height: 1;
    }

    #banner1.textInBanner h1 {
        color: var(--moonstone-blue);
    }

    #banner1.textInBanner p {
        color: white;
    }

    #banner2.textInBanner h1 {
        color: var(--main-text-brown-color);
    }

    #banner2.textInBanner p {
        color: black;
    }

    .textInBanner {
        max-width: 25rem;
    }

    .bannerMargin {
        height: 40px;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }


    @media (max-width: 767px) {
        .homepageBanner {display: none}

        .homepageMobileBanner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 700px;
            width: auto;
        }

        .bannerImageContainer {
            width: 92%;
            height: auto;
            padding: 20px;
        }

        .textInBanner {
            padding-left: 20px;
            padding-right: 20px;
        }
        
        h1 {
            font-size: 25pt;
        }
    }
</style>