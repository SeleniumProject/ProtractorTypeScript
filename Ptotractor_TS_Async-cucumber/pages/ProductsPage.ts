import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";
import { threadId } from "worker_threads";
const log = require("../config/log4js").default;

export class ProductPage {

  searchtxt = new pageEl(by.xpath('//*[@id="header-search-box"]'));
  searchbtn = new pageEl(by.id('desktop-submit-button'));
  products = new pageEl(by.xpath('//*[@id="products"]/div[2]/div[3]/div[1]/a/img'));
  addqty = new pageEl(by.xpath('//*[@class="btn-group btn-group-lg"]/button[2]'));
  choosesize = new pageEl(by.xpath('//*[@class="list-inline size-sku-list"]/li/div/button[1]'));
  addtoCart = new pageEl(by.xpath('//*[@class="btn btn-add-to-cart bold"]'));
  continueshopping = new pageEl(by.xpath('//*[@id="pdp-modal"]/div/div/div[2]/button'));
  

}