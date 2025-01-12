import {expect, test} from "@playwright/test";
import {fillAndAssert} from "../helpers/fill-helper";

test('Verify user is able to Sign Up', async ({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('button', {name: ' My account'}).hover();
    await page.getByRole('link', {name: 'Register'}).click();
    await expect(page.getByRole('heading', {name: 'Register Account'})).toBeVisible();

    const password: string = 'qwerty123';
    await fillAndAssert(page.getByPlaceholder('First Name'), 'Hey');
    await fillAndAssert(page.getByPlaceholder('Last Name'), 'There');
    const randomEmail = `${Math.random().toString(36).substring(2, 10)}@test.com`;
    await fillAndAssert(page.getByPlaceholder('E-Mail'), randomEmail);
    await fillAndAssert(page.getByPlaceholder('Telephone'), '+12345678901');
    await fillAndAssert(page.getByPlaceholder('Password', {exact: true}), password);
    await fillAndAssert(page.getByPlaceholder('Password Confirm'), password)
    await page.getByText('I have read and agree to the').click();
    //await page.getByRole('button', { name: 'Continue' }).click();
});