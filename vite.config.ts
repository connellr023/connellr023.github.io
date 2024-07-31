import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    host: "10.0.0.12",
    port: 5173
  }
})
