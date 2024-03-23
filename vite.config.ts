import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Unfonts from "unplugin-fonts/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "UberMoveText",
            src: "./src/assets/fonts/*.otf",
            transform(font) {
              return font;
            },
          },
        ],
        display: "auto",
        preload: true,
        prefetch: false,
      },
    }),
    tsconfigPaths(),
  ],
});
