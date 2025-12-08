// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import { sidebar } from "./sidebar";

import mermaid from "astro-mermaid";
import d2 from "astro-d2";

import remarkToc from "remark-toc";
import remarkBehead from "remark-behead";

// For math support
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

// https://astro.build/config
export default defineConfig({
	site: "https://firi0n.github.io/appunti-unipi",
	base: "/appunti-unipi",
	markdown: {
		syntaxHighlight: {
			excludeLangs: ["mermaid", "math"],
		},
		remarkPlugins: [
			[remarkToc, { heading: "toc", maxDepth: 6 }],
			[remarkBehead, { depth: 2 }],
			remarkMath,
		],
		rehypePlugins: [rehypeAccessibleEmojis, rehypeKatex],
	},
	integrations: [
		mermaid({
			mermaidConfig: {
				logLevel: "error",
				forceLegacyMathML: true,
				layout: "elk",
				elk: {
					considerModelOrder: "PREFER_NODES",
					forceNodeModelOrder: true,
				},
			},
		}),
		d2(),
		starlight({
			title: "Appunti Unipi",
			logo: {
				src: "/public/favicon.svg",
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/Firi0n/appunti-unipi",
				},
			],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 6,
			},
			plugins: [starlightSidebarTopics(sidebar)],
			customCss: ["./src/styles/custom.css"],
			head: [
				{
					tag: "link",
					attrs: {
						rel: "stylesheet",
						href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
						integrity:
							"sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",
						crossorigin: "anonymous",
					},
				},
			],
		}),
	],
});
