import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets',
      closeBundle() {
        const srcDir = join(__dirname, 'src/assets')
        const destDir = join(__dirname, 'dist/assets')
        
        if (!existsSync(destDir)) {
          mkdirSync(destDir, { recursive: true })
        }
        
        // 复制所有 jpg/png 图片
        const files = ['wyq01.jpg', 'wmd.jpg']
        files.forEach(file => {
          const src = join(srcDir, file)
          const dest = join(destDir, file)
          if (existsSync(src)) {
            copyFileSync(src, dest)
            console.log(`Copied ${file} to dist/assets/`)
          }
        })
      }
    }
  ],
  base: '/personal-landing/',
})
