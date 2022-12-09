import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Component from "unplugin-vue-components/vite";
import Unocss from "unocss/vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dts: true,
    }),
    Component({
      dts: true,
    }),
    Unocss(),
  ],
});
