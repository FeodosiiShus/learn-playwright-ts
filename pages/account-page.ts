import {Locator, Page} from "@playwright/test";

export class AccountPage {
    readonly page: Page;
    readonly headingAccountCreated: Locator;
    readonly congratulationsTxt: Locator;
    readonly continueButton: Locator;
    readonly editYourAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headingAccountCreated = page.getByRole('heading', {name: ' Your Account Has Been'});
        this.congratulationsTxt = page.getByText('Congratulations! Your new');
        this.continueButton = page.getByRole('link', {name: 'Continue'});
        this.editYourAccountButton = page.getByRole('link', {name: ' Edit your account'});
    }

    async clickOnContinueButton() {
        console.log('When I click on continue button');
        await this.continueButton.click();
    }
}