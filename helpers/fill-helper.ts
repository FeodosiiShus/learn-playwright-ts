import {expect, Locator} from "@playwright/test";

export async function fillAndAssert(locator: Locator, value: string) {
    console.log('When I click on locator and fill with value ' + value);
    await locator.click();
    await locator.fill(value);
    console.log('Then I verify is value was entered')
    await expect(locator).toHaveValue(value);
}