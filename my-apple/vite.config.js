import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add your repo name here
export default defineConfig({
  base: '/apple-clone-React/',
  plugins: [react()],
})
