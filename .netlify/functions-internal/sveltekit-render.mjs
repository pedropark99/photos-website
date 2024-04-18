import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","HTZ_0219-2.jpg","portraits/IMG_8318.jpg","portraits/IMG_8320.jpg","portraits/IMG_8330.jpg","portraits/IMG_8335.jpg","portraits/IMG_8420.jpg","street/IMG_8363.jpg","street/IMG_8378.jpg","street/IMG_8383.jpg","street/IMG_8473.jpg","street/IMG_8475.jpg","street/IMG_8477.jpg","street/IMG_8507.jpg","street/IMG_8513.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CgUPjGxx.js","app":"_app/immutable/entry/app.jXurhdJq.js","imports":["_app/immutable/entry/start.CgUPjGxx.js","_app/immutable/chunks/entry.BjY1xy47.js","_app/immutable/chunks/scheduler.CTOPxOTI.js","_app/immutable/chunks/index.DJv2QFRk.js","_app/immutable/entry/app.jXurhdJq.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.CTOPxOTI.js","_app/immutable/chunks/index.CzQIEONm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/portrait",
				pattern: /^\/portrait\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/street",
				pattern: /^\/street\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
