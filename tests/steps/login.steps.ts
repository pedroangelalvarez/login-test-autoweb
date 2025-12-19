import { Before, After, Given, When, Then, World } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext, expect } from '@playwright/test';
import { Actor } from '../screenplay/Actor';
import { BrowseTheWeb } from '../screenplay/abilities/BrowseTheWeb';
import { Navigate } from '../screenplay/tasks/Navigate';
import { Login } from '../screenplay/tasks/Login';
import { ElementText } from '../screenplay/questions/ElementText';
import { PageUrl } from '../screenplay/questions/PageUrl';
import { DashboardPage, LoginPage } from '../screenplay/ui/LoginPage';

let browser: Browser;
let context: BrowserContext;

class CustomWorld extends World {
    page!: Page;
    actor!: Actor;
}

Before(async function (this: CustomWorld) {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    this.page = await context.newPage();
    this.actor = Actor.named('Usuario').whoCan(BrowseTheWeb.using(this.page));
});

After(async function (this: CustomWorld) {
    if (this.page) await this.page.close();
    if (context) await context.close();
    if (browser) await browser.close();
});

Given('que el usuario está en la página de login', async function (this: CustomWorld) {
    await this.actor.attemptsTo(Navigate.to('https://login-test-autoweb.vercel.app'));
});

When('ingresa sus credenciales válidas', async function (this: CustomWorld) {
    await this.actor.attemptsTo(Login.withCredentials('dni', '12345678', 'secret'));
});

Then('realiza login exitoso', async function (this: CustomWorld) {
    const title = await this.actor.asks(ElementText.of(DashboardPage.title));
    const url = await this.actor.asks(PageUrl.current());

    expect(title).toBe('Bienvenido a tu Cuenta Bancaria');
    expect(url).toContain('dashboard');
});

When('ingresa credenciales incorrectas', async function (this: CustomWorld) {
    await this.actor.attemptsTo(Login.withCredentials('dni', '00000000', 'wrongpass'));
});

Then('muestra un mensaje de error {string}', async function (this: CustomWorld, mensajeEsperado: string) {
    const errorMessage = await this.actor.asks(ElementText.of(LoginPage.errorMessage));
    expect(errorMessage).toBe(mensajeEsperado);
});
