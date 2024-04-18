import { f as set_current_component, r as run_all, h as current_component, c as create_ssr_component, o as onDestroy, b as add_attribute } from "./ssr.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const css = {
  code: ".__grid--masonry{display:grid;grid-template-columns:repeat(auto-fit, var(--col-width));grid-template-rows:masonry;justify-content:center;grid-gap:var(--grid-gap);padding:var(--grid-gap)}.__grid--masonry > *{align-self:start \r\n}.__grid--masonry.__stretch-first > *:first-child{grid-column:1/ -1}",
  map: `{"version":3,"file":"Masonry.svelte","sources":["Masonry.svelte"],"sourcesContent":["<!-- \\r\\n  An almost direct copy and paste of: https://css-tricks.com/a-lightweight-masonry-solution\\r\\n  \\r\\n  Usage:\\r\\n    - stretchFirst stretches the first item across the top\\r\\n\\r\\n  <Masonry stretchFirst={true} >\\r\\n    {#each data as o}\\r\\n      <div class=\\"_card _padding\\">\\r\\n        Here's some stuff {o.name}\\r\\n        <header>\\r\\n          <h3>{o.name}</h3>\\r\\n        </header>\\r\\n        <section>\\r\\n          <p>{o.text}</p> \\r\\n        </section>\\r\\n      </div>\\r\\n    {/each}\\r\\n  </Masonry>\\r\\n -->\\r\\n\\r\\n\\r\\n\\r\\n <div bind:this={masonryElement} \\r\\n class={\`__grid--masonry \${stretchFirst ? '__stretch-first' : ''}\`}\\r\\n style={\`--grid-gap: \${gridGap}; --col-width: \${colWidth};\`}\\r\\n >\\r\\n<slot></slot>\\r\\n</div>\\r\\n\\r\\n\\r\\n\\r\\n<script>\\r\\nimport { onMount, onDestroy, getContext, setContext, tick } from 'svelte'\\r\\nexport let  stretchFirst = false,\\r\\n        gridGap = '0.5em',\\r\\n        colWidth = 'minmax(Min(20em, 100%), 1fr)',\\r\\n        items = [] // pass in data if it's dynamically updated\\r\\nlet grids = [], masonryElement\\r\\n\\r\\n\\r\\nexport let reset;\\r\\n$: if(reset) {\\r\\nmasonryElement = masonryElement\\r\\n}\\r\\n\\r\\n\\r\\nexport const refreshLayout = async () => {\\r\\n// console.log(\\"REFRESHING LAYOUT\\")\\r\\ngrids.forEach(async grid => {\\r\\n/* get the post relayout number of columns */\\r\\nlet ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length\\r\\n\\r\\ngrid.items.forEach(c => {\\r\\n  let new_h = c.getBoundingClientRect().height;\\r\\n  \\r\\n  if(new_h !== +c.dataset.h) {\\r\\n    c.dataset.h = new_h\\r\\n    grid.mod++\\r\\n  }\\r\\n});\\r\\n\\r\\n/* if the number of columns has changed */\\r\\nif(grid.ncol !== ncol || grid.mod) {\\r\\n  /* update number of columns */ \\r\\n  grid.ncol = ncol;\\r\\n  /* revert to initial positioning, no margin */\\r\\n  grid.items.forEach(c => c.style.removeProperty('margin-top'))\\r\\n  /* if we have more than one column */\\r\\n  if(grid.ncol > 1) {\\r\\n    grid.items.slice(ncol).forEach((c, i) => {\\r\\n      let prev_fin = grid.items[i].getBoundingClientRect().bottom /* bottom edge of item above */, \\r\\n            curr_ini = c.getBoundingClientRect().top /* top edge of current item */;\\r\\n      \\r\\n      c.style.marginTop = \`\${prev_fin + grid.gap - curr_ini}px\`\\r\\n    })\\r\\n  }\\r\\n  \\r\\n  grid.mod = 0\\r\\n}\\r\\n})\\r\\n}\\r\\n\\r\\nconst calcGrid = async (_masonryArr) => {\\r\\nawait tick()\\r\\nif(_masonryArr.length && getComputedStyle(_masonryArr[0]).gridTemplateRows !== 'masonry') {\\r\\ngrids = _masonryArr.map(grid => {\\r\\n  return {\\r\\n    _el: grid, \\r\\n    gap: parseFloat(getComputedStyle(grid).gridRowGap),\\r\\n    items: [...grid.childNodes].filter(c => c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1), \\r\\n    ncol: 0, \\r\\n    mod: 0\\r\\n  }\\r\\n})\\r\\nrefreshLayout() /* initial load */\\r\\n}\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\nlet _window\\r\\nonMount(() => {\\r\\n_window = window\\r\\n_window.addEventListener('resize', refreshLayout, false) /* on resize */\\r\\n})\\r\\nonDestroy(() => {\\r\\nif(_window) {\\r\\n_window.removeEventListener('resize', refreshLayout, false) /* on resize */\\r\\n}\\r\\n})\\r\\n\\r\\n\\r\\n$: if(masonryElement) { \\r\\ncalcGrid([masonryElement])\\r\\n}\\r\\n\\r\\n$: if(items) { // update if items are changed\\r\\nmasonryElement = masonryElement // refresh masonryElement\\r\\n}\\r\\n<\/script>\\r\\n\\r\\n<!-- \\r\\n$w: var(--col-width); // minmax(Min(20em, 100%), 1fr);\\r\\n$s: var(--grid-gap); // .5em;\\r\\n-->\\r\\n\\r\\n<style>\\r\\n:global(.__grid--masonry) {\\r\\ndisplay: grid;\\r\\ngrid-template-columns: repeat(auto-fit, var(--col-width));\\r\\ngrid-template-rows: masonry;\\r\\njustify-content: center;\\r\\ngrid-gap: var(--grid-gap);\\r\\npadding: var(--grid-gap);\\r\\n\\r\\n}\\r\\n:global(.__grid--masonry > *) { \\r\\nalign-self: start \\r\\n}\\r\\n:global(.__grid--masonry.__stretch-first > *:first-child) { \\r\\ngrid-column: 1/ -1;\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AAiIQ,gBAAkB,CAC1B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,IAAI,WAAW,CAAC,CAAC,CACzD,kBAAkB,CAAE,OAAO,CAC3B,eAAe,CAAE,MAAM,CACvB,QAAQ,CAAE,IAAI,UAAU,CAAC,CACzB,OAAO,CAAE,IAAI,UAAU,CAEvB,CACQ,oBAAsB,CAC9B,UAAU,CAAE,KAAK;AACjB,CACQ,gDAAkD,CAC1D,WAAW,CAAE,CAAC,CAAC,CAAC,EAChB"}`
};
const Masonry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stretchFirst = false, gridGap = "0.5em", colWidth = "minmax(Min(20em, 100%), 1fr)", items = [] } = $$props;
  let grids = [], masonryElement;
  let { reset } = $$props;
  const refreshLayout = async () => {
    grids.forEach(async (grid) => {
      let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(" ").length;
      grid.items.forEach((c) => {
        let new_h = c.getBoundingClientRect().height;
        if (new_h !== +c.dataset.h) {
          c.dataset.h = new_h;
          grid.mod++;
        }
      });
      if (grid.ncol !== ncol || grid.mod) {
        grid.ncol = ncol;
        grid.items.forEach((c) => c.style.removeProperty("margin-top"));
        if (grid.ncol > 1) {
          grid.items.slice(ncol).forEach((c, i) => {
            let prev_fin = grid.items[i].getBoundingClientRect().bottom, curr_ini = c.getBoundingClientRect().top;
            c.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`;
          });
        }
        grid.mod = 0;
      }
    });
  };
  const calcGrid = async (_masonryArr) => {
    await tick();
    if (_masonryArr.length && getComputedStyle(_masonryArr[0]).gridTemplateRows !== "masonry") {
      grids = _masonryArr.map((grid) => {
        return {
          _el: grid,
          gap: parseFloat(getComputedStyle(grid).gridRowGap),
          items: [...grid.childNodes].filter((c) => c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1),
          ncol: 0,
          mod: 0
        };
      });
      refreshLayout();
    }
  };
  onDestroy(() => {
  });
  if ($$props.stretchFirst === void 0 && $$bindings.stretchFirst && stretchFirst !== void 0)
    $$bindings.stretchFirst(stretchFirst);
  if ($$props.gridGap === void 0 && $$bindings.gridGap && gridGap !== void 0)
    $$bindings.gridGap(gridGap);
  if ($$props.colWidth === void 0 && $$bindings.colWidth && colWidth !== void 0)
    $$bindings.colWidth(colWidth);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0)
    $$bindings.reset(reset);
  if ($$props.refreshLayout === void 0 && $$bindings.refreshLayout && refreshLayout !== void 0)
    $$bindings.refreshLayout(refreshLayout);
  $$result.css.add(css);
  {
    if (reset) {
      masonryElement = masonryElement;
    }
  }
  {
    if (items) {
      masonryElement = masonryElement;
    }
  }
  {
    if (masonryElement) {
      calcGrid([masonryElement]);
    }
  }
  return ` <div${add_attribute("class", `__grid--masonry ${stretchFirst ? "__stretch-first" : ""}`, 0)}${add_attribute("style", `--grid-gap: ${gridGap}; --col-width: ${colWidth};`, 0)}${add_attribute("this", masonryElement, 0)}>${slots.default ? slots.default({}) : ``}</div>  `;
});
export {
  Masonry as M
};
