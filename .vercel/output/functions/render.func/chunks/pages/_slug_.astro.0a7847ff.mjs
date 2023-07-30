/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro.4ba9c02c.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`<html>
    <head>
        <meta http-equiv="refresh"${addAttribute(`0; url=https://blog.devcomp.xyz/posts/${slug}`, "content")}>
    ${renderHead()}</head>
</html>`;
}, "/home/compey/dev/silly-little-portfolio/src/pages/blog/[slug].astro", void 0);

const $$file = "/home/compey/dev/silly-little-portfolio/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, $$url as url };
