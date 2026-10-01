import { defineConfig } from "vite";

export default defineConfig({
    base: "/Projeto.ong/",
    root: "html",
    build: {
        outDir: "../dist",
        emptyOutDir: true
    }
});