import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'googlechrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});