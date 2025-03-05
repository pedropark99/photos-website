<script lang="ts">
    let id = "banner1";
    export let img_src;
    export let index = 0;
    export let h_text;
    export let p_text;

    if (index % 2 != 0) {
        id = "banner2";
    }
</script>


<div id="{id}" class="homepageBanner">

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





<div id="{id}" class="homepageMobileBanner">
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





<style>
    .homepageMobileBanner {display: none}
    .homepageBanner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        width: 100vw;

        -webkit-animation: banner-scroll-fade linear;
        -moz-animation: banner-scroll-fade linear;
        -ms-animation: banner-scroll-fade linear;
        -o-animation: banner-scroll-fade linear;
        animation: banner-scroll-fade linear;
        animation-timeline: view(700px 0px);
    }

    @keyframes banner-scroll-fade {
        from { scale: 0.8; opacity: 0; }
        to   { scale: 1; opacity: 1; }
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