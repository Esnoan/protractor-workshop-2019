import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedCheckoutButton: ElementFinder;

  constructor() {
    this.proceedCheckoutButton = $('#center_column > form > p > button > span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
