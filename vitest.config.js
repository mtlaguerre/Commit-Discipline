import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react' // 1. Import the plugin

export default defineConfig({
  plugins: [react()], // 2. Add it to the plugins array
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium' }
      ],
    },
    reporters: ['default', 'junit'],
    outputFile: 'test-results.xml'
  },
})
