import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private loginButton: ElementFinder;
  private emailInput: ElementFinder;
  private passwdInput: ElementFinder;

  constructor() {
    this.loginButton = $('#SubmitLogin > span');
    this.emailInput = $('#email');
    this.passwdInput = $('#passwd');
  }

  public async login(): Promise<void> {
    await this.emailInput.sendKeys('aperdomobo@gmail.com');
    await this.passwdInput.sendKeys('WorkshopProtractor');
    await this.loginButton.click();
  }
}
