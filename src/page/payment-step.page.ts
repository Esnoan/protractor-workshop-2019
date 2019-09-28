import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireButton: ElementFinder;
  private confirmOrderButton: ElementFinder;

  constructor() {
    this.payByBankWireButton = $(
      '#HOOK_PAYMENT > div:nth-child(1) > div > p > a'
    );
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public async goToPayByBankWire(): Promise<void> {
    await this.payByBankWireButton.click();
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
