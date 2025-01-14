import {defineConfig, devices, PlaywrightTestConfig} from '@playwright/test';

const config : PlaywrightTestConfig = {
  testMatch: ["tests/registration.spec.ts"],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    baseURL: 'https://ecommerce-playground.lambdatest.io/'
  },
  reporter: [['html', {open: 'never'}]]
}

export default config;
