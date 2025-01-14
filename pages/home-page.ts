import {Locator, Page} from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly myAccountButton: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountButton = page.getByRole('button', {name: ' My account'});
        this.registerButton = page.getByRole('link', {name: 'Register'});
    }

    async open() {
        console.log('When I open home page')
        await this.page.goto('');
    }

    async proceedToRegister() {
        console.log('When I proceed to Register page')
        await this.myAccountButton.hover();
        await this.registerButton.click();
    }
}