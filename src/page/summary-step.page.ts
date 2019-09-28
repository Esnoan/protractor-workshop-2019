import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private textConfirmation: ElementFinder;

  constructor() {
    this.textConfirmation = $('#center_column > div > p > strong');
  }

  public async getTextConfirmation(): Promise<string> {
    return await this.textConfirmation.getText();
  }
}
