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
