import {expect, test} from "@playwright/test";
import {HomePage} from "../pages/home-page";
import {RegistrationPage} from "../pages/registration-page";
import {AccountPage} from "../pages/account-page";

test('Verify user is able to Sign Up', async ({page}) => {
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);
    const accountPage = new AccountPage(page);

    await homePage.open();
    await homePage.proceedToRegister();
    await registrationPage.verifyIsHeadingPresent();
    await registrationPage.fillRequiredFieldsForSignUp();
    await registrationPage.clickOnContinue();
    await expect(accountPage.headingAccountCreated).toBeVisible();
    await expect(accountPage.congratulationsTxt).toBeVisible();
    await accountPage.clickOnContinueButton();
    await expect(accountPage.editYourAccountButton).toBeVisible();
});