import {expect, Locator, Page} from "@playwright/test";
import {fillAndAssert} from "../helpers/fill-helper";

export class RegistrationPage {
    readonly page: Page;
    readonly registrationHeading: Locator;
    readonly email: string;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly termsAgreementCheckbox: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registrationHeading = page.getByRole('heading', {name: 'Register Account'});
        this.email = `${Math.random().toString(36).substring(2, 10)}@test.com`;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('E-Mail');
        this.phoneInput = page.getByPlaceholder('Telephone');
        this.passwordInput = page.getByPlaceholder('Password', {exact: true});
        this.confirmPasswordInput = page.getByPlaceholder('Password Confirm');
        this.termsAgreementCheckbox = page.getByText('I have read and agree to the');
        this.continueButton = page.getByRole('button', {name: 'Continue'});
    }

    async verifyIsHeadingPresent() {
        console.log('Then I verify is heading present');
        await expect(this.registrationHeading).toBeVisible();
    }

    async fillRequiredFieldsForSignUp() {
        console.log('When I fill required fields for sign up')
        await fillAndAssert(this.firstNameInput, 'Hey');
        await fillAndAssert(this.lastNameInput, 'There');
        await fillAndAssert(this.emailInput, this.email);
        await fillAndAssert(this.phoneInput, '+12345678901');
        await fillAndAssert(this.passwordInput, 'qwerty123');
        await fillAndAssert(this.confirmPasswordInput, 'qwerty123');
        await this.termsAgreementCheckbox.check();
    }

    async clickOnContinue() {
        console.log('When I click on continue button')
        await this.continueButton.click();
    }
}