/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro.4ba9c02c.mjs';
/* empty css                           */
/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/* src/layouts/Layout.svelte generated by Svelte v4.1.1 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { leftAlign } = $$props;
	if ($$props.leftAlign === void 0 && $$bindings.leftAlign && leftAlign !== void 0) $$bindings.leftAlign(leftAlign);

	return `<meta charset="utf-8">  ${leftAlign
	? `<div class="overflow-x-hidden overflow-y-hidden w-4/5"> <section class="p-4"><main>${slots.default ? slots.default({}) : ``}</main></section></div> <footer></footer>`
	: ``} ${!leftAlign
	? `<div class="overflow-x-hidden overflow-y-hidden" style="width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 999"> <section class="p-8 sm:p-12 lg:p-24 lg:py-16 font-cascadia z-10 flex flex-col sm:flex-row gap-y-10 justify-center grid place-items-center h-screen"><main>${slots.default ? slots.default({}) : ``}</main></section></div>`
	: ``}`;
});

/* src/components/ProjectItem.svelte generated by Svelte v4.1.1 */

const ProjectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { href } = $$props;
	let { name } = $$props;
	let { description = void 0 } = $$props;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);

	return `<li><a${add_attribute("href", href, 0)} target="_blank" rel="noreferrer noopener" class="dark:text-ocean-300 projects underline">${escape(name)}</a> ${description
	? `<span class="dark:text-ocean-400">- ${escape(description)}</span>`
	: ``}</li>`;
});

/* src/components/LinkItem.svelte generated by Svelte v4.1.1 */

const LinkItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { href } = $$props;
	let { name } = $$props;
	let { description = void 0 } = $$props;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);

	return `<li><a${add_attribute("href", href, 0)} target="_blank" rel="noreferrer noopener me" class="dark:text-ocean-300 link underline">${escape(name)}</a> ${description
	? `<span class="dark:text-ocean-400">- ${escape(description)}</span>`
	: ``}</li>`;
});

/* src/components/Workspace.svelte generated by Svelte v4.1.1 */

const Workspace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { workspace = "" } = $$props;
	if ($$props.workspace === void 0 && $$bindings.workspace && workspace !== void 0) $$bindings.workspace(workspace);

	return `${workspace
	? `<span class="inline-block">in <span class="dark:text-ocean-100">${escape(workspace)}</span></span>`
	: ``}`;
});

/* src/components/Branch.svelte generated by Svelte v4.1.1 */

const Branch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { name = "" } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);

	return `${name
	? `<span class="inline-block">on <span class="dark:text-ocean-magenta inline-block"> ${escape(name)}</span></span>`
	: ``}`;
});

/* src/components/Language.svelte generated by Svelte v4.1.1 */

let nodeVersion = "16.16.0";

const Language = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { lang = "" } = $$props;
	let rustVersion = "1.62.1";

	fetch("https://api.github.com/repos/rust-lang/rust/releases/latest").then(res => res.json()).then(res => {
		rustVersion = res.tag_name ?? rustVersion;
	});

	let langMap;
	if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);

	langMap = {
		js: `<span class="dark:text-ocean-green"> \uE718 ${nodeVersion}</span>`,
		jsx: `<span class="dark:text-ocean-green"> \uE718 ${nodeVersion}</span>`,
		ts: `<span class="dark:text-ocean-green"> \uE718 ${nodeVersion}</span>`,
		tsx: `<span class="dark:text-ocean-green"> \uE718 ${nodeVersion}</span>`,
		svelte: `<span class="dark:text-ocean-green"> \uE718 ${nodeVersion}</span>`,
		rust: `<span class="dark:text-ocean-rust"> \u{1F980} v${rustVersion}</span>`
	};

	return `${langMap[lang]
	? `<span class="inline-block">via <!-- HTML_TAG_START -->${langMap[lang]}<!-- HTML_TAG_END --></span>`
	: ``}`;
});

const getCodeData = (data) => {
  const codeActivity = data?.activities.find((a) => a.application_id === "782685898163617802");
  if (!codeActivity) {
    return void 0;
  }
  const idling = codeActivity.details === "Idling";
  if (idling) {
    return {
      idling: true
    };
  }
  const workspace = codeActivity.details.substring(3).split(" - ")[0];
  const branch = codeActivity.details.substring(3).replaceAll(/\u200b/g, "").trim().split(" - ")[1];
  const lang = codeActivity.assets.large_text?.split(" ")[2].toLocaleLowerCase();
  return {
    lang,
    workspace,
    branch
  };
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const apiEndpoint = "https://api.lanyard.rest/v1/users/893762371770802227";
  const fetchedData = await fetch(apiEndpoint).then(
    (response) => response.json()
  );
  const data = fetchedData.data;
  let codeData = getCodeData(data);
  return renderTemplate`<html lang="en">
	<meta charset="utf-8">
	<link rel="icon" type="image/x-icon" href="https://github.com/CompeyDev.png">

	

	

	${maybeRenderHead()}<astro:head>
		<title>silly little portfolio</title>
		<!-- 		<meta charset="utf-8" />
		<meta name="og:title" content="silly little portfolio" />
		<meta name="description" content="just a tad bit of tomfoolery" />
		<meta name="og:description" content="just a tad bit of tomfoolery" />
		<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f9f0f5" />
		<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#281c21" /> -->
	</astro:head>

	<span class="bob"></span>
	${renderComponent($$result, "Layout", Layout, { "leftAlign": false }, { "default": ($$result2) => renderTemplate`
		<div id="container">
			<canvas id="canvas"></canvas>
			<audio id="audio"></audio>
		</div>
		<div class="overflow-x-hidden overflow-y-hidden" style="width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 999">
			<div id="current_music_div" style="text-align: right; visibility: hidden;">
				<img style="float: right; padding-right: 5px; align: right;" src="/assets/icons/rsz_currently-playing-music-note-8-bit.gif">
				<p style="padding-top: 5px;" id="current_music"></p>
			</div>
			<section class="p-8 sm:p-12 lg:p-24 lg:py-16 font-cascadia z-10 flex flex-col sm:flex-row gap-y-10 justify-center grid place-items-center h-screen">
				<div class="flex flex-col gap-7">
					<div>
						<h1 class="text-ocean-700 dark:text-ocean-300">
							<span class="dark:text-ocean-blue">compey</span>
							${renderComponent($$result2, "Workspace", Workspace, { "workspace": codeData?.workspace })}
							${renderComponent($$result2, "Branch", Branch, { "name": codeData?.branch })}
							${renderComponent($$result2, "Language", Language, { "lang": codeData?.lang })}
						</h1>
						<br>
						<h1 class="text-ocean-900 dark:text-ocean-100 heading">
							projects
						</h1>
						<ul class="list-disc list-inside text-ocean-700 dark:text-ocean-blue">
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://datalink.dev", "name": "datalink", "description": "lightweight & futuristic analytics platform" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/flightpkg", "name": "flightpkg", "description": "package manager of the future" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/bvm", "name": "bvm", "description": "bun version manager" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/create-guilded-bot", "name": "create-guilded-bot", "description": "guilded bot bootstrapper & framework" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/roblox.js", "name": "roblox.js", "description": "roblox opencloud js wrapper" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/discord-status-action", "name": "discord-status-action", "description": "discord status emoji using GitHub Actions" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/rojo-build-action", "name": "rojo-build-action", "description": "build rojo projects using GitHub actions" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/nemo", "name": "nemo", "description": "offensive post-exploitation Framework" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/signals-rs", "name": "signals-rs", "description": "lua(u)-inspired implementation of signals in rust" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/tomfoolery", "name": "tomfoolery", "description": "troll discord AI chatbot" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/makegen", "name": "makegen", "description": "a dynamic makefile generator" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/luau-asm", "name": "luau-asm", "description": "tiny mock asm set in luau" })}
							${renderComponent($$result2, "ProjectItem", ProjectItem, { "href": "https://github.com/CompeyDev/bf-rs", "name": "bf-rs", "description": "simple brainf*ck interpreter in rust" })}
						</ul>
					</div>
					<div>
						<h1 class="text-ocean-900 dark:text-ocean-100 heading">
							links
						</h1>
						<ul class="list-disc list-inside text-ocean-700 dark:text-ocean-blue">
							${renderComponent($$result2, "LinkItem", LinkItem, { "href": "https://blog.devcomp.xyz", "name": "blog" })}
							${renderComponent($$result2, "LinkItem", LinkItem, { "href": "https://twitter.com/DevComp_", "name": "twitter" })}
							${renderComponent($$result2, "LinkItem", LinkItem, { "href": "https://mas.to/@DevComp", "name": "mastodon" })}
							${renderComponent($$result2, "LinkItem", LinkItem, { "href": "https://github.com/CompeyDev", "name": "github" })}
							${renderComponent($$result2, "LinkItem", LinkItem, { "href": "mailto:hi@devcomp.xyz", "name": "email" })}
						</ul>
					</div>
					<button class="text-ocean-900 dark:text-ocean-300 flex flex-col items-start sm:items-end gap-3 sm:gap-7 sm:text-right flash" id="PRESS_ME" style="font-weight: bolder">
						PLAY!
					</button>
				</div>
			</section>
		</div>
	` })}

</html>`;
}, "/home/compey/dev/silly-little-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/compey/dev/silly-little-portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
