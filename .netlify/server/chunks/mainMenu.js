import { c as create_ssr_component, b as add_attribute, e as escape, d as each, a as subscribe, v as validate_component } from "./ssr.js";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { w as writable } from "./index.js";
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  if (typeof scale === "string") {
    scale = parseFloat(scale);
  }
  if (typeof translateX === "string") {
    translateX = parseFloat(translateX);
  }
  if (typeof translateY === "string") {
    translateY = parseFloat(translateY);
  }
  const x = `${translateX * translateTimes}${translateUnit}`;
  const y = `${translateY * translateTimes}${translateUnit}`;
  let output = `translate(${x},${y}) scale(${flipX * scale},${flipY * scale})`;
  if (rotate) {
    output += ` rotate(${rotate}${rotateUnit})`;
  }
  return output;
}
const css$2 = {
  code: ".svelte-fa-base{height:1em;overflow:visible;transform-origin:center;vertical-align:-0.125em}.svelte-fa-fw{text-align:center;width:1.25em}.svelte-fa-pull-left.svelte-bvo74f{float:left}.svelte-fa-pull-right.svelte-bvo74f{float:right}.svelte-fa-size-lg.svelte-bvo74f{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-bvo74f{font-size:0.875em}.svelte-fa-size-xs.svelte-bvo74f{font-size:0.75em}.spin.svelte-bvo74f{animation:svelte-bvo74f-spin 2s 0s infinite linear}.pulse.svelte-bvo74f{animation:svelte-bvo74f-spin 1s infinite steps(8)}@keyframes svelte-bvo74f-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"fa.svelte","sources":["fa.svelte"],"sourcesContent":["<script>import { getTransform, setCustomFontSize } from \\"./utils.js\\";\\nlet clazz = void 0;\\nexport { clazz as class };\\nexport let id = void 0;\\nexport let style = void 0;\\nexport let icon;\\nexport let size = void 0;\\nexport let color = void 0;\\nexport let fw = false;\\nexport let pull = void 0;\\nexport let scale = 1;\\nexport let translateX = 0;\\nexport let translateY = 0;\\nexport let rotate = void 0;\\nexport let flip = void 0;\\nexport let spin = false;\\nexport let pulse = false;\\nexport let primaryColor = \\"\\";\\nexport let secondaryColor = \\"\\";\\nexport let primaryOpacity = 1;\\nexport let secondaryOpacity = 0.4;\\nexport let swapOpacity = false;\\nlet svgElement;\\n$:\\n  svgElement && size && setCustomFontSize(svgElement, size);\\n$:\\n  i = icon && icon.icon || [0, 0, \\"\\", [], \\"\\"];\\n$:\\n  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);\\n<\/script>\\n\\n{#if i[4]}\\n  <!-- eslint-disable svelte/no-inline-styles -- Only styles passed to this component should be included -->\\n  <svg\\n    {id}\\n    class=\\"svelte-fa svelte-fa-base {clazz}\\"\\n    class:pulse\\n    class:svelte-fa-size-lg={size === \\"lg\\"}\\n    class:svelte-fa-size-sm={size === \\"sm\\"}\\n    class:svelte-fa-size-xs={size === \\"xs\\"}\\n    class:svelte-fa-fw={fw}\\n    class:svelte-fa-pull-left={pull === \\"left\\"}\\n    class:svelte-fa-pull-right={pull === \\"right\\"}\\n    class:spin\\n    bind:this={svgElement}\\n    {style}\\n    viewBox=\\"0 0 {i[0]} {i[1]}\\"\\n    aria-hidden=\\"true\\"\\n    role=\\"img\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n  >\\n    <!-- eslint-enable -->\\n    <g transform=\\"translate({i[0] / 2} {i[1] / 2})\\" transform-origin=\\"{i[0] / 4} 0\\">\\n      <g {transform}>\\n        {#if typeof i[4] == \\"string\\"}\\n          <path\\n            d={i[4]}\\n            fill={color || primaryColor || \\"currentColor\\"}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n        {:else}\\n          <!-- Duotone icons -->\\n          <path\\n            d={i[4][0]}\\n            fill={secondaryColor || color || \\"currentColor\\"}\\n            fill-opacity={swapOpacity != false ? primaryOpacity : secondaryOpacity}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n          <path\\n            d={i[4][1]}\\n            fill={primaryColor || color || \\"currentColor\\"}\\n            fill-opacity={swapOpacity != false ? secondaryOpacity : primaryOpacity}\\n            transform=\\"translate({i[0] / -2} {i[1] / -2})\\"\\n          />\\n        {/if}\\n      </g>\\n    </g>\\n  </svg>\\n{/if}\\n\\n<style>\\n  :global(.svelte-fa-base) {\\n    height: 1em;\\n    overflow: visible;\\n    transform-origin: center;\\n    vertical-align: -0.125em;\\n  }\\n\\n  :global(.svelte-fa-fw) {\\n    text-align: center;\\n    width: 1.25em;\\n  }\\n\\n  .svelte-fa-pull-left {\\n    float: left;\\n  }\\n\\n  .svelte-fa-pull-right {\\n    float: right;\\n  }\\n\\n  .svelte-fa-size-lg {\\n    font-size: 1.33333em;\\n    line-height: 0.75em;\\n    vertical-align: -0.225em;\\n  }\\n\\n  .svelte-fa-size-sm {\\n    font-size: 0.875em;\\n  }\\n\\n  .svelte-fa-size-xs {\\n    font-size: 0.75em;\\n  }\\n\\n  .spin {\\n    animation: spin 2s 0s infinite linear;\\n  }\\n\\n  .pulse {\\n    animation: spin 1s infinite steps(8);\\n  }\\n\\n  @keyframes spin {\\n    0% {\\n      transform: rotate(0deg);\\n    }\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiFU,eAAiB,CACvB,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,OAAO,CACjB,gBAAgB,CAAE,MAAM,CACxB,cAAc,CAAE,QAClB,CAEQ,aAAe,CACrB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,MACT,CAEA,kCAAqB,CACnB,KAAK,CAAE,IACT,CAEA,mCAAsB,CACpB,KAAK,CAAE,KACT,CAEA,gCAAmB,CACjB,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,QAClB,CAEA,gCAAmB,CACjB,SAAS,CAAE,OACb,CAEA,gCAAmB,CACjB,SAAS,CAAE,MACb,CAEA,mBAAM,CACJ,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,EAAE,CAAC,QAAQ,CAAC,MACjC,CAEA,oBAAO,CACL,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,CACrC,CAEA,WAAW,kBAAK,CACd,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}'
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let i;
  let transform;
  let { class: clazz = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { style = void 0 } = $$props;
  let { icon } = $$props;
  let { size = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { fw = false } = $$props;
  let { pull = void 0 } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { flip = void 0 } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let svgElement;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$2);
  i = icon && icon.icon || [0, 0, "", [], ""];
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? ` <svg${add_attribute("id", id, 0)} class="${[
    "svelte-fa svelte-fa-base " + escape(clazz, true) + " svelte-bvo74f",
    (pulse ? "pulse" : "") + " " + (size === "lg" ? "svelte-fa-size-lg" : "") + " " + (size === "sm" ? "svelte-fa-size-sm" : "") + " " + (size === "xs" ? "svelte-fa-size-xs" : "") + " " + (fw ? "svelte-fa-fw" : "") + " " + (pull === "left" ? "svelte-fa-pull-left" : "") + " " + (pull === "right" ? "svelte-fa-pull-right" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${add_attribute("style", style, 0)} viewBox="${"0 0 " + escape(i[0], true) + " " + escape(i[1], true)}" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"${add_attribute("this", svgElement, 0)}><g transform="${"translate(" + escape(i[0] / 2, true) + " " + escape(i[1] / 2, true) + ")"}" transform-origin="${escape(i[0] / 4, true) + " 0"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>` : ` <path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path> <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + escape(i[0] / -2, true) + " " + escape(i[1] / -2, true) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
let locale = writable("Português");
locale.update((l) => l);
locale.subscribe((value) => {
  console.log(value);
});
const css$1 = {
  code: `:root{--accent-color:#77B6EA;--gray:#ccc}.s--inner.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4{padding:0.5em;background-color:#fff;border:1px solid var(--gray)}[role='switch'][aria-checked='true'].svelte-80t4v4 .svelte-80t4v4.svelte-80t4v4:first-child,[role='switch'][aria-checked='false'].svelte-80t4v4 .svelte-80t4v4.svelte-80t4v4:last-child{display:none;color:#fff}.s--inner.svelte-80t4v4 button span.svelte-80t4v4.svelte-80t4v4{-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;padding:0.25em}.s--inner.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4:focus{outline:var(--accent-color) solid 1px}.s--slider.svelte-80t4v4.svelte-80t4v4.svelte-80t4v4{display:flex;align-items:center}.s--slider.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4{width:3em;height:1.6em;position:relative;margin:0 0 0 0.5em;background:var(--gray);border:none}.s--slider.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4::before{content:'';position:absolute;width:1.3em;height:1.3em;background:#fff;top:0.13em;right:1.5em;transition:transform 0.3s}.s--slider.svelte-80t4v4 button[aria-checked='true'].svelte-80t4v4.svelte-80t4v4{background-color:var(--accent-color)\r
    }.s--slider.svelte-80t4v4 button[aria-checked='true'].svelte-80t4v4.svelte-80t4v4::before{transform:translateX(1.3em);transition:transform 0.3s}.s--multi.svelte-80t4v4 .group-container.svelte-80t4v4.svelte-80t4v4{border:none;padding:0;white-space:nowrap}.s--multi.svelte-80t4v4 label.svelte-80t4v4.svelte-80t4v4{display:inline-block;line-height:1.6;position:relative;z-index:2}.s--multi.svelte-80t4v4 input.svelte-80t4v4.svelte-80t4v4{opacity:0;position:absolute}.s--multi.svelte-80t4v4 label.svelte-80t4v4.svelte-80t4v4:first-of-type{padding-right:5em}.s--multi.svelte-80t4v4 label.svelte-80t4v4.svelte-80t4v4:last-child{margin-left:-5em;padding-left:5em}.s--multi.svelte-80t4v4:focus-within label.svelte-80t4v4.svelte-80t4v4:first-of-type:after{border-radius:1.5em}.s--multi.svelte-80t4v4 label.svelte-80t4v4.svelte-80t4v4:first-of-type:before,.s--multi.svelte-80t4v4 label.svelte-80t4v4.svelte-80t4v4:first-of-type:after{content:"";height:1.25em;overflow:hidden;pointer-events:none;position:absolute;vertical-align:middle}.s--multi.svelte-80t4v4 label.svelte-80t4v4.svelte-80t4v4:first-of-type:before{border-radius:100%;z-index:2;position:absolute;width:1.2em;height:1.2em;background:#fff;top:0.2em;right:1.2em;transition:transform 0.3s}.s--multi.svelte-80t4v4 label.svelte-80t4v4.svelte-80t4v4:first-of-type:after{background:var(--accent-color);border-radius:1em;margin:0 1em;transition:background .2s ease-in-out;width:3em;height:1.6em}.s--multi.svelte-80t4v4 input.svelte-80t4v4:first-of-type:checked~label.svelte-80t4v4:first-of-type:after{background:var(--gray)}.s--multi.svelte-80t4v4 input.svelte-80t4v4:first-of-type:checked~label.svelte-80t4v4:first-of-type:before{transform:translateX(-1.4em)}.s--multi.svelte-80t4v4 input.svelte-80t4v4:last-of-type:checked~label.svelte-80t4v4:last-of-type{z-index:1}.s--multi.svelte-80t4v4 input.svelte-80t4v4.svelte-80t4v4:focus{border-radius:1.5em}[role='switch'][aria-checked='true'].svelte-80t4v4 .svelte-80t4v4.svelte-80t4v4:first-child,[role='switch'][aria-checked='false'].svelte-80t4v4 .svelte-80t4v4.svelte-80t4v4:last-child{border-radius:0.25em;background:var(--accent-color);display:inline-block}.s--inner.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4:focus{border-radius:0.1em}.s--slider.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4{border-radius:1.5em}.s--slider.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4::before{border-radius:100%}.s--slider.svelte-80t4v4 button.svelte-80t4v4.svelte-80t4v4:focus{border-radius:1.5em}`,
  map: `{"version":3,"file":"Switch.svelte","sources":["Switch.svelte"],"sourcesContent":["<script>\\r\\n    // based on suggestions from:\\r\\n    // Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/\\r\\n    // On Designing and Building Toggle Switches by Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/\\r\\n    // and this example by Scott O'hara https://codepen.io/scottohara/pen/zLZwNv \\r\\n\\r\\n\\r\\n    export let label;\\r\\n    export let design = 'inner label'\\r\\n    export let options = [];\\r\\n\\t\\texport let fontSize = 16;\\r\\n\\t  export let value = 'on';\\r\\n\\r\\n    let checked = true;\\r\\n\\r\\n\\r\\n\\t\\tconst uniqueID = Math.floor(Math.random() * 100)\\r\\n\\r\\n    function handleClick(event){\\r\\n        const target = event.target\\r\\n\\r\\n        const state = target.getAttribute('aria-checked')\\r\\n\\r\\n        checked = state === 'true' ? false : true\\r\\n\\r\\n        value = checked === true ? 'on' : 'off'\\r\\n    }\\r\\n\\t\\r\\n\\t  const slugify = (str = \\"\\") =>\\r\\n    str.toLowerCase().replace(/ /g, \\"-\\").replace(/\\\\./g, \\"\\");\\r\\n\\r\\n<\/script>\\r\\n\\r\\n{#if design == 'inner'}\\r\\n<div class=\\"s s--inner\\">\\r\\n    <span id={\`switch-\${uniqueID}\`}>{label}</span>\\r\\n    <button\\r\\n        role=\\"switch\\"\\r\\n        aria-checked={checked}\\r\\n        aria-labelledby={\`switch-\${uniqueID}\`}\\r\\n        on:click={handleClick}>\\r\\n            <span>on</span>\\r\\n            <span>off</span>\\r\\n    </button>\\r\\n</div>\\r\\n{:else if design == 'slider'}\\r\\n<div class=\\"s s--slider\\" style=\\"font-size:{fontSize}px\\">\\r\\n    <span id={\`switch-\${uniqueID}\`}>{label}</span>\\r\\n    <button\\r\\n        role=\\"switch\\"\\r\\n        aria-checked={checked}\\r\\n        aria-labelledby={\`switch-\${uniqueID}\`}\\r\\n        on:click={handleClick}>\\r\\n    </button>\\r\\n</div>\\r\\n{:else}\\r\\n<div class=\\"s s--multi\\">\\r\\n    <div role='radiogroup'\\r\\n\\t\\t\\t\\t class=\\"group-container\\"\\r\\n\\t\\t\\t\\t aria-labelledby={\`label-\${uniqueID}\`}\\r\\n\\t\\t\\t\\t style=\\"font-size:{fontSize}px\\" \\r\\n\\t\\t\\t\\t id={\`group-\${uniqueID}\`}>\\r\\n    <div class='legend' id={\`label-\${uniqueID}\`}>{label}</div>\\r\\n        {#each options as option}\\r\\n            <input type=\\"radio\\" id={\`\${option}-\${uniqueID}\`} value={option} bind:group={value}>\\r\\n            <label for={\`\${option}-\${uniqueID}\`}>\\r\\n                {option}\\r\\n            </label> \\r\\n        {/each}\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t:root {\\r\\n\\t\\t--accent-color: #77B6EA;\\r\\n\\t\\t--gray: #ccc;\\r\\n\\t}\\r\\n    /* Inner Design Option */\\r\\n    .s--inner button {\\r\\n        padding: 0.5em;\\r\\n        background-color: #fff;\\r\\n        border: 1px solid var(--gray);\\r\\n    }\\r\\n    [role='switch'][aria-checked='true'] :first-child,\\r\\n    [role='switch'][aria-checked='false'] :last-child {\\r\\n        display: none;\\r\\n        color: #fff;\\r\\n    }\\r\\n\\r\\n    .s--inner button span {\\r\\n        -webkit-user-select: none;\\r\\n           -moz-user-select: none;\\r\\n                user-select: none;\\r\\n        pointer-events:none;\\r\\n        padding: 0.25em;\\r\\n    }\\r\\n\\r\\n    .s--inner button:focus {\\r\\n        outline: var(--accent-color) solid 1px;\\r\\n    }\\r\\n\\r\\n    /* Slider Design Option */\\r\\n\\r\\n    .s--slider {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n\\r\\n    .s--slider button {\\r\\n        width: 3em;\\r\\n        height: 1.6em;\\r\\n        position: relative;\\r\\n        margin: 0 0 0 0.5em;\\r\\n        background: var(--gray);\\r\\n        border: none;\\r\\n    }\\r\\n\\r\\n    .s--slider button::before {\\r\\n        content: '';\\r\\n        position: absolute;\\r\\n        width: 1.3em;\\r\\n        height: 1.3em;\\r\\n        background: #fff;\\r\\n        top: 0.13em;\\r\\n        right: 1.5em;\\r\\n        transition: transform 0.3s;\\r\\n    }\\r\\n\\r\\n    .s--slider button[aria-checked='true']{\\r\\n        background-color: var(--accent-color)\\r\\n    }\\r\\n\\r\\n    .s--slider button[aria-checked='true']::before{\\r\\n        transform: translateX(1.3em);\\r\\n        transition: transform 0.3s;\\r\\n    }\\r\\n\\r\\n\\r\\n    /* Multi Design Option */\\r\\n\\r\\n    /* Based on suggestions from Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/\\r\\n    and this example from Scott O'hara https://codepen.io/scottohara/pen/zLZwNv */\\r\\n\\r\\n    .s--multi .group-container {\\r\\n        border: none;\\r\\n        padding: 0;\\r\\n        white-space: nowrap;\\r\\n    }\\r\\n\\r\\n    /* .s--multi legend {\\r\\n    font-size: 2px;\\r\\n    opacity: 0;\\r\\n    position: absolute;\\r\\n    } */\\r\\n\\r\\n    .s--multi label {\\r\\n        display: inline-block;\\r\\n        line-height: 1.6;\\r\\n        position: relative;\\r\\n        z-index: 2;\\r\\n    }\\r\\n\\r\\n    .s--multi input {\\r\\n        opacity: 0;\\r\\n        position: absolute;\\r\\n    }\\r\\n\\r\\n    .s--multi label:first-of-type {\\r\\n        padding-right: 5em;\\r\\n    }\\r\\n\\r\\n    .s--multi label:last-child {\\r\\n        margin-left: -5em;\\r\\n        padding-left: 5em;\\r\\n    }\\r\\n\\r\\n    .s--multi:focus-within label:first-of-type:after {\\r\\n        border-radius: 1.5em;\\r\\n    }\\r\\n\\r\\n\\r\\n\\r\\n    /* making the switch UI.  */\\r\\n    .s--multi label:first-of-type:before,\\r\\n    .s--multi label:first-of-type:after {\\r\\n        content: \\"\\";\\r\\n        height: 1.25em;\\r\\n        overflow: hidden;\\r\\n        pointer-events: none;\\r\\n        position: absolute;\\r\\n        vertical-align: middle;\\r\\n    }\\r\\n\\r\\n    .s--multi label:first-of-type:before {\\r\\n        border-radius: 100%;\\r\\n        z-index: 2;\\r\\n        position: absolute;\\r\\n        width: 1.2em;\\r\\n        height: 1.2em;\\r\\n        background: #fff;\\r\\n        top: 0.2em;\\r\\n        right: 1.2em;\\r\\n        transition: transform 0.3s;\\r\\n    }\\r\\n\\r\\n    .s--multi label:first-of-type:after {\\r\\n        background: var(--accent-color);\\r\\n        border-radius: 1em;\\r\\n        margin: 0 1em;\\r\\n        transition: background .2s ease-in-out;\\r\\n        width: 3em;\\r\\n        height: 1.6em;\\r\\n    }\\r\\n\\r\\n    .s--multi input:first-of-type:checked ~ label:first-of-type:after {\\r\\n        background: var(--gray);\\r\\n    }\\r\\n\\r\\n    .s--multi input:first-of-type:checked ~ label:first-of-type:before {\\r\\n        transform: translateX(-1.4em);\\r\\n    }\\r\\n\\r\\n    .s--multi input:last-of-type:checked ~ label:last-of-type {\\r\\n        z-index: 1;\\r\\n    }\\r\\n\\r\\n    .s--multi input:focus {\\r\\n        border-radius: 1.5em;\\r\\n    }\\r\\n\\r\\n    /* gravy */ \\r\\n\\r\\n    /* Inner Design Option */\\r\\n    [role='switch'][aria-checked='true'] :first-child,\\r\\n    [role='switch'][aria-checked='false'] :last-child {\\r\\n        border-radius: 0.25em;\\r\\n        background: var(--accent-color);\\r\\n        display: inline-block;\\r\\n    }\\r\\n\\r\\n    .s--inner button:focus {\\r\\n        border-radius: 0.1em;\\r\\n    }\\r\\n\\r\\n    /* Slider Design Option */\\r\\n    .s--slider button {\\r\\n        border-radius: 1.5em;\\r\\n    } \\r\\n    \\r\\n    .s--slider button::before {\\r\\n        border-radius: 100%;\\r\\n    }\\r\\n\\r\\n    .s--slider button:focus {\\r\\n        border-radius: 1.5em;\\r\\n    }\\r\\n   \\r\\n\\r\\n</style>"],"names":[],"mappings":"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"}`
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { design = "inner label" } = $$props;
  let { options = [] } = $$props;
  let { fontSize = 16 } = $$props;
  let { value = "on" } = $$props;
  let checked = true;
  const uniqueID = Math.floor(Math.random() * 100);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.design === void 0 && $$bindings.design && design !== void 0)
    $$bindings.design(design);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$1);
  return `${design == "inner" ? `<div class="s s--inner svelte-80t4v4"><span${add_attribute("id", `switch-${uniqueID}`, 0)} class="svelte-80t4v4">${escape(label)}</span> <button role="switch"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-labelledby", `switch-${uniqueID}`, 0)} class="svelte-80t4v4"><span class="svelte-80t4v4" data-svelte-h="svelte-oik0f3">on</span> <span class="svelte-80t4v4" data-svelte-h="svelte-10sksj5">off</span></button></div>` : `${design == "slider" ? `<div class="s s--slider svelte-80t4v4" style="${"font-size:" + escape(fontSize, true) + "px"}"><span${add_attribute("id", `switch-${uniqueID}`, 0)}>${escape(label)}</span> <button role="switch"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-labelledby", `switch-${uniqueID}`, 0)} class="svelte-80t4v4"></button></div>` : `<div class="s s--multi svelte-80t4v4"><div role="radiogroup" class="group-container svelte-80t4v4"${add_attribute("aria-labelledby", `label-${uniqueID}`, 0)} style="${"font-size:" + escape(fontSize, true) + "px"}"${add_attribute("id", `group-${uniqueID}`, 0)}><div class="legend"${add_attribute("id", `label-${uniqueID}`, 0)}>${escape(label)}</div> ${each(options, (option) => {
    return `<input type="radio"${add_attribute("id", `${option}-${uniqueID}`, 0)}${add_attribute("value", option, 0)} class="svelte-80t4v4"${option === value ? add_attribute("checked", true, 1) : ""}> <label${add_attribute("for", `${option}-${uniqueID}`, 0)} class="svelte-80t4v4">${escape(option)} </label>`;
  })}</div></div>`}`}`;
});
const css = {
  code: "p.svelte-y3ekhw{font-size:11pt;text-align:left}h1.svelte-y3ekhw{font-family:Cormorant, serif;font-size:38pt;font-style:italic;color:var(--main-text-brown-color);margin-bottom:0px}hr.svelte-y3ekhw{border-top:2px solid #222222}.socialMediaContact.svelte-y3ekhw{display:grid;grid-template-columns:1fr 1fr 1fr 4fr;margin-right:20px}.mainMenu.svelte-y3ekhw{margin-left:30px}",
  map: `{"version":3,"file":"mainMenu.svelte","sources":["mainMenu.svelte"],"sourcesContent":["<script>\\r\\n\\timport Fa from 'svelte-fa';\\r\\n\\timport { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';\\r\\n    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';\\r\\n\\timport {locale} from \\"../stores\\"\\r\\n\\r\\n\\timport Switch from './Switch.svelte';\\r\\n\\r\\n\\tlet local_locale = \\"Português\\";\\r\\n\\tconst menu_options = {\\r\\n\\t\\t\\"Português\\": {\\r\\n\\t\\t\\t\\"description\\": \\"Fotógrafo 📷 baseado em Belo Horizonte - Brasil. Fotografia de rua e retratos.\\",\\r\\n\\t\\t\\t\\"home.label\\": \\"HOME\\",\\r\\n\\t\\t\\t\\"about.label\\": \\"SOBRE MIM\\",\\r\\n\\t\\t\\t\\"street.label\\": \\"FOTOGRAFIA DE RUA\\",\\r\\n\\t\\t\\t\\"portrait.label\\": \\"RETRATOS\\"\\r\\n\\t\\t},\\r\\n\\t\\t\\"English\\": {\\r\\n\\t\\t\\t\\"description\\": \\"Photographer 📷 based at Belo Horizonte - Brazil. Street and Portrait Photography.\\",\\r\\n\\t\\t\\t\\"home.label\\": \\"HOME\\",\\r\\n\\t\\t\\t\\"about.label\\": \\"ABOUT ME\\",\\r\\n\\t\\t\\t\\"street.label\\": \\"STREET PHOTOGRAPHY\\",\\r\\n\\t\\t\\t\\"portrait.label\\": \\"PORTRAITS\\"\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\r\\n\\tconst locale_callback = locale.subscribe((value) => local_locale = value);\\r\\n<\/script>\\r\\n\\r\\n\\r\\n\\r\\n<div class=\\"mainMenu\\">\\r\\n\\r\\n    <h1>Pedro Faria</h1>\\r\\n\\r\\n\\t<p>{@html menu_options[local_locale][\\"description\\"]}</p>\\r\\n\\r\\n\\t<hr/>\\r\\n\\t<br>\\r\\n\\r\\n\\t<Switch bind:value={$locale} label=\\"\\" design=\\"multi\\" options={['English', 'Português']}/>\\r\\n\\r\\n\\t<br><br>\\r\\n\\r\\n\\t<div class=\\"menuOption\\" id=\\"home-button\\" ><a href=\\".\\">{menu_options[local_locale][\\"home.label\\"]}</a></div>\\r\\n\\t<div class=\\"menuOption\\" id=\\"about-button\\" ><a href=\\"/about\\">{menu_options[local_locale][\\"about.label\\"]}</a></div>\\r\\n\\t<div class=\\"menuOption\\" id=\\"street-button\\" ><a href=\\"/street\\">{menu_options[local_locale][\\"street.label\\"]}</a></div>\\r\\n\\t<div class=\\"menuOption\\" id=\\"portrait-button\\" ><a href=\\"/portrait\\">{menu_options[local_locale][\\"portrait.label\\"]}</a></div>\\r\\n\\r\\n\\t<br><br><br><br><br>\\r\\n\\r\\n\\t<div class=\\"socialMediaContact\\">\\r\\n\\t\\t<a href=\\"https://www.instagram.com/mineiro.pelasruas/\\"><Fa icon={faInstagram} color=\\"var(--main-text-brown-color)\\" size=\\"20pt\\"/></a>\\r\\n\\t\\t<a href=\\"https://wa.me/5531985124294\\"><Fa icon={faWhatsapp} color=\\"var(--main-text-brown-color)\\" size=\\"20pt\\"/></a>\\r\\n\\t\\t<a href=\\"mailto:pedropark99@gmail.com\\"><Fa icon={faEnvelope} color=\\"var(--main-text-brown-color)\\" size=\\"20pt\\"/></a>\\r\\n\\t</div>\\r\\n\\r\\n\\t<br><br>\\r\\n\\r\\n\\t<div>&copy Copyright 2024 Pedro Faria.</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n\\tp {\\r\\n\\t\\tfont-size: 11pt;\\r\\n\\t\\ttext-align: left;\\r\\n\\t}\\r\\n\\r\\n\\th1 {\\r\\n\\t\\tfont-family: Cormorant, serif;\\r\\n\\t\\tfont-size: 38pt;\\r\\n\\t\\tfont-style: italic;\\r\\n\\t\\tcolor: var(--main-text-brown-color);\\r\\n\\t\\tmargin-bottom: 0px;\\r\\n\\t}\\r\\n\\r\\n\\thr {\\r\\n\\t\\tborder-top: 2px solid #222222;\\r\\n\\t}\\r\\n\\r\\n\\t.socialMediaContact {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: 1fr 1fr 1fr 4fr;\\r\\n\\t\\tmargin-right: 20px;\\r\\n\\t}\\r\\n\\r\\n\\t.mainMenu {\\r\\n\\t\\tmargin-left: 30px;\\r\\n\\t}\\r\\n\\r\\n</style>"],"names":[],"mappings":"AAgEC,eAAE,CACD,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACb,CAEA,gBAAG,CACF,WAAW,CAAE,SAAS,CAAC,CAAC,KAAK,CAC7B,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,uBAAuB,CAAC,CACnC,aAAa,CAAE,GAChB,CAEA,gBAAG,CACF,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OACvB,CAEA,iCAAoB,CACnB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACtC,YAAY,CAAE,IACf,CAEA,uBAAU,CACT,WAAW,CAAE,IACd"}`
};
const MainMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  let local_locale = "Português";
  const menu_options = {
    "Português": {
      "description": "Fotógrafo 📷 baseado em Belo Horizonte - Brasil. Fotografia de rua e retratos.",
      "home.label": "HOME",
      "about.label": "SOBRE MIM",
      "street.label": "FOTOGRAFIA DE RUA",
      "portrait.label": "RETRATOS"
    },
    "English": {
      "description": "Photographer 📷 based at Belo Horizonte - Brazil. Street and Portrait Photography.",
      "home.label": "HOME",
      "about.label": "ABOUT ME",
      "street.label": "STREET PHOTOGRAPHY",
      "portrait.label": "PORTRAITS"
    }
  };
  locale.subscribe((value) => local_locale = value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="mainMenu svelte-y3ekhw"><h1 class="svelte-y3ekhw" data-svelte-h="svelte-ft67j5">Pedro Faria</h1> <p class="svelte-y3ekhw"><!-- HTML_TAG_START -->${menu_options[local_locale]["description"]}<!-- HTML_TAG_END --></p> <hr class="svelte-y3ekhw"> <br> ${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        label: "",
        design: "multi",
        options: ["English", "Português"],
        value: $locale
      },
      {
        value: ($$value) => {
          $locale = $$value;
          $$settled = false;
        }
      },
      {}
    )} <br><br> <div class="menuOption" id="home-button"><a href=".">${escape(menu_options[local_locale]["home.label"])}</a></div> <div class="menuOption" id="about-button"><a href="/about">${escape(menu_options[local_locale]["about.label"])}</a></div> <div class="menuOption" id="street-button"><a href="/street">${escape(menu_options[local_locale]["street.label"])}</a></div> <div class="menuOption" id="portrait-button"><a href="/portrait">${escape(menu_options[local_locale]["portrait.label"])}</a></div> <br><br><br><br><br> <div class="socialMediaContact svelte-y3ekhw"><a href="https://www.instagram.com/mineiro.pelasruas/">${validate_component(Fa, "Fa").$$render(
      $$result,
      {
        icon: faInstagram,
        color: "var(--main-text-brown-color)",
        size: "20pt"
      },
      {},
      {}
    )}</a> <a href="https://wa.me/5531985124294">${validate_component(Fa, "Fa").$$render(
      $$result,
      {
        icon: faWhatsapp,
        color: "var(--main-text-brown-color)",
        size: "20pt"
      },
      {},
      {}
    )}</a> <a href="mailto:pedropark99@gmail.com">${validate_component(Fa, "Fa").$$render(
      $$result,
      {
        icon: faEnvelope,
        color: "var(--main-text-brown-color)",
        size: "20pt"
      },
      {},
      {}
    )}</a></div> <br><br> <div data-svelte-h="svelte-1tq9211">© Copyright 2024 Pedro Faria.</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_locale();
  return $$rendered;
});
export {
  MainMenu as M,
  locale as l
};
