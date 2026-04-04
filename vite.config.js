import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  test: {
    browser: {
      enabled: true,          // Enables browser mode
      name: 'chromium',       // Target browser
      provider: 'playwright'
    }
  }
})
