import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";
import { threadId } from "worker_threads";
const log = require("../config/log4js").default;

export class ProductsPage {

  searchtxt = new pageEl(by.xpath('//*[@id="header-search-box"]'));
  searchbtn = new pageEl(by.id('desktop-submit-button'));
  products = new pageEl(by.xpath('//*[@id="products"]/div[2]/div[3]/div[1]/a/img'));
  addqty = new pageEl(by.xpath('//*[@class="btn-group btn-group-lg"]/button[2]'));
  choosesize = new pageEl(by.xpath('//*[@class="list-inline size-sku-list"]/li/div/button[1]'));
  addtoCart = new pageEl(by.xpath('//*[@class="btn btn-add-to-cart bold"]'));
  continueshopping = new pageEl(by.xpath('//*[@id="pdp-modal"]/div/div/div[2]/button'));
  cartIcon = new pageEl(by.xpath('//*[@id="container-icons"]/div/div/ul/li[3]/a'));
  securecheckout = new pageEl(by.id('secure-checkout'));
  cardNumbertxt = new pageEl(by.id('card-number'));
  expirytxt = new pageEl(by.id('card-expiration'));
  cvvtxt = new pageEl(by.id('card-code'));
  
  
  async searchForProduct(txt: string) {
    await this.searchtxt.sendKeys(txt);
  }

  async clickSearchButton() {
    await this.searchbtn.click();
  }

  async selectProduct() {
    await this.products.click();
  }

  async clickaddqty() {
    await this.addqty.click();
  }

  async chooseProductSize() {
    await this.choosesize.click();
  }

 
  async addToCart() {
    await this.addtoCart.click();
  }

  async clickContinueShopping() {
    await this.continueshopping.click();
  }

  async clickCartIcon() {
    await this.cartIcon.click();
  }

  async clickSecureCheckout() {
    await this.securecheckout.click();
  }

  async enterCreditCardNumber(txt: string) {
    await this.cardNumbertxt.click();
    await this.cardNumbertxt.sendKeys(txt);
  }

  async enterExpiryDate(txt: string) {
    await this.expirytxt.click();
    await this.expirytxt.sendKeys(txt);
  }

  async enterCvvNumber(txt: string) {
    await this.cvvtxt.click();
    await this.cvvtxt.sendKeys(txt);
  }
}