import { resolve } from 'path'

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
    build: {
        target: "ES2022",      
        emptyOutDir: false,
        assetsInlineLimit: Number.MAX_SAFE_INTEGER,
        cssMinify: true, 
		    minify: true,        
        rollupOptions: {
          input: {
            sedit: resolve(__dirname, 'src/editor/sedit.html'),
            // splay: resolve(__dirname, 'src/playground/splay.html'),
          },
          output: {
            dir: 'dist',
          }
        },
      },    
	plugins: [
    vue(), 
    viteSingleFile({ 
        useRecommendedBuildConfig: true,
        deleteInlinedFiles: true,    
        removeViteModuleLoader: true, 
    })
  ],
})
