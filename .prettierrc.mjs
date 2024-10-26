// .prettierrc.mjs
/** @type {import("prettier").Config} */
const config = {
	semi: false,
	tabWidth: 2,
	useTabs: false,
};

export default {
	plugins: ["prettier-plugin-astro"],
};
