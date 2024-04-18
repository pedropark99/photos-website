

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BcV8aJMU.js","_app/immutable/chunks/scheduler.CTOPxOTI.js","_app/immutable/chunks/index.CzQIEONm.js","_app/immutable/chunks/mainMenu.lLl7CNFL.js","_app/immutable/chunks/index.DJv2QFRk.js"];
export const stylesheets = ["_app/immutable/assets/3.rOjUCqex.css","_app/immutable/assets/mainMenu.sAAwtI3A.css"];
export const fonts = [];
