import {expect, Locator} from "@playwright/test";

export async function fillAndAssert(locator: Locator, value: string) {
    await locator.click();
    await locator.fill(value);
    await expect(locator).toHaveValue(value);
}