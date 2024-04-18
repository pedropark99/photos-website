import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute } from "../../../chunks/ssr.js";
import { M as MainMenu } from "../../../chunks/mainMenu.js";
import { M as Masonry } from "../../../chunks/Masonry.js";
/* empty css                                                  */
const css = {
  code: ".modalCloseButton.svelte-1wu74fy{font-size:25pt}.imageInModal.svelte-1wu74fy{max-height:130vh}.pageContent.svelte-1wu74fy{margin-right:calc(5%)}@keyframes svelte-1wu74fy-fadeIn{0%{opacity:0}100%{opacity:1}}.grid-item.svelte-1wu74fy{animation:svelte-1wu74fy-fadeIn 2s;width:350px}img.svelte-1wu74fy{border-radius:15px}.grid-item.svelte-1wu74fy:hover{opacity:0.8;cursor:pointer}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import MainMenu from \\"../mainMenu.svelte\\";\\r\\n\\timport Masonry from \\"../../lib/Masonry.svelte\\";\\r\\n\\timport { fade } from 'svelte/transition';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport Modal from './../Modal.svelte';\\r\\n\\tconst images_paths = import.meta.glob(\\"./../../../static/street/*.jpg\\");\\r\\n\\r\\n\\tlet refreshLayout;\\r\\n\\tvar images = [];\\r\\n\\tvar image_path_fixed;\\r\\n\\tfor (const image_path in images_paths) {\\r\\n\\t\\timage_path_fixed = String(image_path).replace('../../../static/', '')\\r\\n\\t\\timages.push(image_path_fixed)\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\tlet dialog;\\r\\n\\tlet selected_image = images[0];\\r\\n\\tfunction zoom_over_image(image_node) {\\r\\n\\t\\tconst image_path = image_node.target.src;\\r\\n\\t\\tselected_image = image_path;\\r\\n\\t\\tdialog.showModal();\\r\\n\\t}\\r\\n\\r\\n\\tonMount(() => {\\r\\n\\t\\tdocument.getElementById(\\"street-button\\").style.textDecoration = \\"underline 1pt solid #222222\\";\\r\\n\\t})\\r\\n<\/script>\\r\\n\\r\\n\\r\\n\\r\\n<div class=\\"app\\">\\r\\n\\t<MainMenu/>\\r\\n\\t<div class=\\"pageContent\\">\\r\\n\\r\\n\\t<Masonry items={images} colWidth={\\"350px\\"} bind:refreshLayout={refreshLayout}>\\r\\n\\t\\t{#each images as image}\\r\\n\\t\\t\\t\\t<div class=\\"grid-item\\">\\r\\n\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\t\\t\\t\\ton:click={ (event) => { zoom_over_image(event) } }\\r\\n\\t\\t\\t\\t\\t\\ton:load={refreshLayout}\\r\\n\\t\\t\\t\\t\\t\\tsrc=\\"{image}\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\"\\"\\r\\n\\t\\t\\t\\t\\t\\twidth=\\"350px\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t{/each}\\r\\n\\t</Masonry>\\r\\n\\r\\n\\t\\r\\n\\t<dialog bind:this={dialog} on:close on:click|self={() => dialog.close()}>\\r\\n\\t\\t<button autofocus class=\\"modalCloseButton\\" on:click={() => dialog.close()}>&times;</button>\\r\\n        <hr />\\r\\n        <img class=\\"imageInModal\\" src=\\"{selected_image}\\" alt=\\"\\" width=\\"100%\\" />\\r\\n    </dialog>\\r\\n\\r\\n\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n\\r\\n\\t.modalCloseButton {\\r\\n\\t\\tfont-size: 25pt;\\r\\n\\t}\\r\\n\\r\\n\\t.imageInModal {\\r\\n\\t\\tmax-height: 130vh;\\r\\n\\t}\\r\\n\\r\\n\\t.pageContent {\\r\\n\\t\\tmargin-right: calc(5%);\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes fadeIn {\\r\\n\\t\\t0% { opacity: 0; }\\r\\n\\t\\t100% { opacity: 1; }\\r\\n\\t}\\r\\n\\t.grid-item {\\r\\n\\t\\tanimation: fadeIn 2s;\\r\\n\\t\\twidth: 350px;\\r\\n\\t}\\r\\n\\r\\n\\tsvg {\\r\\n\\t\\tfilter: invert(12%) sepia(10%) saturate(7149%) hue-rotate(345deg) brightness(96%) contrast(96%);\\r\\n\\t}\\r\\n\\r\\n\\timg {\\r\\n\\t\\tborder-radius: 15px;\\r\\n    }\\r\\n\\r\\n\\t.grid-item:hover {\\r\\n\\t\\topacity: 0.8;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t}\\r\\n\\r\\n</style>"],"names":[],"mappings":"AAiEC,gCAAkB,CACjB,SAAS,CAAE,IACZ,CAEA,4BAAc,CACb,UAAU,CAAE,KACb,CAEA,2BAAa,CACZ,YAAY,CAAE,KAAK,EAAE,CACtB,CAEA,WAAW,qBAAO,CACjB,EAAG,CAAE,OAAO,CAAE,CAAG,CACjB,IAAK,CAAE,OAAO,CAAE,CAAG,CACpB,CACA,yBAAW,CACV,SAAS,CAAE,qBAAM,CAAC,EAAE,CACpB,KAAK,CAAE,KACR,CAMA,kBAAI,CACH,aAAa,CAAE,IACb,CAEH,yBAAU,MAAO,CAChB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,OACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images_paths = /* @__PURE__ */ Object.assign({ "../../../static/street/IMG_8363.jpg": () => import("../../../chunks/IMG_8363.js"), "../../../static/street/IMG_8378.jpg": () => import("../../../chunks/IMG_8378.js"), "../../../static/street/IMG_8383.jpg": () => import("../../../chunks/IMG_8383.js"), "../../../static/street/IMG_8473.jpg": () => import("../../../chunks/IMG_8473.js"), "../../../static/street/IMG_8475.jpg": () => import("../../../chunks/IMG_8475.js"), "../../../static/street/IMG_8477.jpg": () => import("../../../chunks/IMG_8477.js"), "../../../static/street/IMG_8507.jpg": () => import("../../../chunks/IMG_8507.js"), "../../../static/street/IMG_8513.jpg": () => import("../../../chunks/IMG_8513.js") });
  let refreshLayout;
  var images = [];
  var image_path_fixed;
  for (const image_path in images_paths) {
    image_path_fixed = String(image_path).replace("../../../static/", "");
    images.push(image_path_fixed);
  }
  let dialog;
  let selected_image = images[0];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="app">${validate_component(MainMenu, "MainMenu").$$render($$result, {}, {}, {})} <div class="pageContent svelte-1wu74fy">${validate_component(Masonry, "Masonry").$$render(
      $$result,
      {
        items: images,
        colWidth: "350px",
        refreshLayout
      },
      {
        refreshLayout: ($$value) => {
          refreshLayout = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(images, (image) => {
            return `<div class="grid-item svelte-1wu74fy"><img loading="lazy"${add_attribute("src", image, 0)} alt="" width="350px" class="svelte-1wu74fy"> </div>`;
          })}`;
        }
      }
    )} <dialog${add_attribute("this", dialog, 0)}><button autofocus class="modalCloseButton svelte-1wu74fy" data-svelte-h="svelte-bew185">×</button> <hr> <img class="imageInModal svelte-1wu74fy"${add_attribute("src", selected_image, 0)} alt="" width="100%"></dialog></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
