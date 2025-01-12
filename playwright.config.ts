import {defineConfig, devices, PlaywrightTestConfig} from '@playwright/test';

const config : PlaywrightTestConfig = {
  testMatch: ["tests/first-test.spec.ts"],
  use: {
    headless: true,
    screenshot: 'only-on-failure'
  },
  reporter: [['html', {open: 'never'}]]
}

export default config;
