import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-static"

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
		  pages: "build",
      assets: "build",
      precompress: false
		}),
		paths: {
		  base: ""
		}
	}
}

export default config
