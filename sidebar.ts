import { type StarlightSidebarTopicsUserConfig } from "starlight-sidebar-topics";

export const sidebar: StarlightSidebarTopicsUserConfig = [
	{
		label: "Home",
		link: "",
		id: "home",
		items: [],
	},
	{
		label: "Analisi",
		link: "/analisi/",
		id: "analisi",
		items: [{ label: "Analisi", autogenerate: { directory: "analisi" } }],
	},
	{
		label: "Algebra lineare",
		link: "/algebra_lineare/01-introduzione",
		id: "algebra_lineare",
		items: [
			{
				label: "Algebra lineare",
				autogenerate: { directory: "algebra_lineare" },
			},
		],
	},
	{
		label: "Ricerca operativa",
		link: "/ricerca_operativa/01-introduzione",
		id: "ricerca_operativa",
		items: [
			{
				label: "Ricerca operativa",
				autogenerate: { directory: "ricerca_operativa" },
			},
		],
	},
	{
		label: "Architetture e sistemi operativi",
		link: "/aeso/architetture/01_introduzione",
		id: "aeso",
		items: [
			{
				label: "Architetture e sistemi operativi",
				autogenerate: { directory: "aeso" },
			},
		],
	},
	{
		label: "Ingegneria del Software",
		link: "/software_engineering/processo_software",
		id: "software-engineering",
		items: [
			{
				label: "Ingegneria del Software",
				autogenerate: { directory: "software_engineering" },
			},
		],
	},
];
