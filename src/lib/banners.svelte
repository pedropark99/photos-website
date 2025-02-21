<script>
    const banner_img1 = "events/ensaio-rojo-2025/IMG_2770.webp";
    const banner_img2 = "events/galinheiro-rep-14anos/IMG_0479.webp";
    const banner_img3 = "IMG_3378.webp";
</script>

<div class="bannerMargin"/>
<div id="banner1" class="homepageBanner">
    <div class="bannerImageContainer">
        <img alt="" src="{banner_img1}" />
    </div>

    <div id="banner1" class="textInBanner">
        <h1>Retratos</h1>
        <p>
            Faça um ensaio pessoal e personalizado que captura
            a sua essência. Seja para melhorar a sua auto-estima sobre você mesmo,
            ou, para criar recordações do seu "eu" atual.
        </p>
    </div>
</div>

<div id="banner2" class="homepageBanner">
    <div id="banner2" class="textInBanner">
        <h1>Cobertura de eventos</h1>
        <p>
            Registro grandes momentos nos mais diversos
            tipos de eventos, como aniversários, palestras,
            formaturas, casamentos e mais.
        </p>
    </div>

    <div id="banner2" class="bannerImageContainer">
        <img alt="" src="{banner_img2}" />
    </div>
</div>

<div id="banner1" class="homepageBanner">
    <div id="banner1" class="bannerImageContainer">
        <img alt="" src="{banner_img3}" />
    </div>

    <div id="banner1" class="textInBanner">
        <h1>Ensaios corporativos</h1>
        <p>
            Uma boa forma de se posicionar no mercado é ter uma fotografia
            que comunique quem você é para os seus clientes.
        </p>
    </div>
</div>

<div class="bannerMargin"/>


<style>
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

    .homepageBanner h1 {
        font-family: Outfit, serif;
		font-size: 40pt;
		font-weight: bold;
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
</style>