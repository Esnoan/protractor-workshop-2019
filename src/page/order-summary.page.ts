import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private proceedTocheckoutButton: ElementFinder;

  constructor() {
    this.proceedTocheckoutButton = $('.cart_navigation span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedTocheckoutButton.click();
  }
}
