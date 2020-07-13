import { Given, Then, TableDefinition, When } from 'cucumber';
import { HomePage } from "../pages/HomePage";
import { Util } from "../Utility/Util";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";

import {ManagerPage} from "../pages/ManagerPage";
import { brotliCompress } from "zlib";
import { browser } from "protractor";
import { LoginPage } from '../pages/LoginPage';
import { CreateAnAccount } from '../pages/CreateAnAccount';

var _ = require('lodash');

//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;
const expect = require('chai').expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const log = require("../config/log4js").default;

var homePage: HomePage = new HomePage();
var register: CreateAnAccount = new CreateAnAccount();
var loginPage: LoginPage = new LoginPage();
const addCustPage: AddCustomerPage = new AddCustomerPage();
var openAccount: OpenAccountPage = new OpenAccountPage();


Given(/^User should be able to navigate to site url$/, async () => {
  log.debug("Starting");
  await homePage.navigateToMyAccountPage();
   // log.debug(await homePage.mainHeading.getText('mainHeading'));
  //await expect(await homePage.mainHeading.getText('mainHeading')).to.equal("XYZ Bank");
});

When(/^User click on My Account link$/, async () => {
  await homePage.clickOnregisterLink();
})    

Then(/^I Enter the Email "([^"]*)"$/, async (email) => {
  await register.enterEmailAddresstxt(email);
await browser.sleep(3000);
// })

  When(/^User click on Register button$/, async () => {
    
    await loginPage.clickRegisterButton();
  })
Then(/^I go to Add Customer screen$/, async () => {
  
  await register.enterRegistrationData();
  //await new ManagerPage().navigateToAddCustomer();
  //await browser.sleep(2000);
});
  
  When(/^User fill ([^"]*), ([^"]*), ([^"]*), ([^"]*), ([^"]*), ([^"]*), ([^"]*), ([^"]*), ([^"]*) in register screen$/, async () => {
    
  })

  When(/^I click on Register button$/, async () => {
    
  })
// Then(/^I enter ([^"]*), ([^"]*), ([^"]*) to create a customer$/, async (fname, lname, pcode) => {
//   log.debug(fname + lname + pcode);
//   await addCustPage.addCustomer(fname, lname, pcode);
//   expect(true).to.equal(true);
//   //await browser.sleep(3000);
// })

// Given(/^I am on Open Account Page$/, async () => {
//   await new ManagerPage().navigateToOpenAccount();
//   await browser.sleep(2000);
//   //log.debug(await Util.getText(openAccount.Process));
//   await expect(await openAccount.Process.getText('ProcessBtn')).to.equal("Process");
// });

// Then(/^I select customerName as customer$/, async (table: TableDefinition) => {
//   var name: string = '';
//   log.debug(table);
//   var rows = table.hashes();
//   name = rows[0].customerName;
//   log.debug(name);
//   await openAccount.selectACustomer(name);
//   //await browser.sleep(3000);
// })

// Then(/^I select currency as "([^"]*)"$/, async (currency) => {
  await openAccount.selectACurrency(currency);
//   //await browser.sleep(3000);
// })

// Then(/^I should click on Process to create an account$/, async () => {
//   await openAccount.ProcessIt();
//   //log.debug("I should click on Process to create an account");

// })



