import {defineConfig, devices, PlaywrightTestConfig} from '@playwright/test';

const config : PlaywrightTestConfig = {
  testMatch: ["tests/registration.spec.ts"],
  use: {
    headless: true,
    screenshot: 'only-on-failure'
  },
  reporter: [['html', {open: 'never'}]]
}

export default config;
