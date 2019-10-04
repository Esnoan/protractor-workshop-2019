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
    await productListPage.addToCart();
    await productAddedModalPage.proceedToCheckout();
    await orderSummaryPage.proceedToCheckout();

    await signInStepPage.login();

    await addressStepPage.proceedToCheckout();

    await shippingStepPage.acceptTermsOfService();

    await shippingStepPage.proceedToCheckout();

    await paymentStepPage.goToPayByBankWire();

    await paymentStepPage.confirmOrder();

    const textConfirmation = await summaryStepPage.getTextConfirmation();

    expect(textConfirmation).toBe('Your order on My Store is complete.');
  });
});
