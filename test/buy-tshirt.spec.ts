import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductAddedModalPage,
  ProductListPage,
  OrderSummaryPage,
  SignInStepPage,
  ShippingStepPage,
  AddressStepPage,
  PaymentStepPage,
  SummaryStepPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await browser.sleep(3000);
    await productListPage.addToCart();
    await browser.sleep(3000);
    await productAddedModalPage.proceedToCheckout();
    await browser.sleep(3000);
    await orderSummaryPage.proceedToCheckout();
    await browser.sleep(3000);

    await signInStepPage.login();
    await browser.sleep(3000);

    await addressStepPage.proceedToCheckout();
    await browser.sleep(3000);

    await shippingStepPage.acceptTermsOfService();
    await browser.sleep(3000);

    await shippingStepPage.proceedToCheckout();
    await browser.sleep(3000);

    await paymentStepPage.goToPayByBankWire();
    await browser.sleep(3000);

    await paymentStepPage.confirmOrder();
    await browser.sleep(3000);

    const textConfirmation = await summaryStepPage.getTextConfirmation();

    expect(textConfirmation).toBe('Your order on My Store is complete.');
  });
});
