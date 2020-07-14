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
import { ProductsPage } from '../pages/ProductsPage';

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
var productPage: ProductsPage = new ProductsPage();


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
  await register.enterEmailinLoginPage(email);
  await browser.sleep(3000);
})

When(/^User click on Register button$/, async () => {
    
  await loginPage.clickRegisterButton();
  await browser.sleep(5000);
})
When(/^User enter the Firstname "([^"]*)"$/, async (fname) => {
    
  await register.enterFirstName(fname);
  
})

When(/^User enter the Lastname "([^"]*)"$/, async (lname) => {
    
  await register.enterLastName(lname);
  
})
When(/^User enter the addrone "([^"]*)"$/, async (addrone) => {
    
  await register.enterAddressone(addrone);
  
})

When(/^User enter the addrtwo "([^"]*)"$/, async (addtwo) => {
    
  await register.enterAddresstwo(addtwo);
  
})

When(/^User enter the city "([^"]*)"$/, async (city) => {
    
  await register.enterCity(city);
  
})

When(/^User enter the state "([^"]*)"$/, async (state) => {
    
  await register.selectState(state);
  
})
When(/^User enter the zip "([^"]*)"$/, async (zip) => {
    
  await register.enterPinCode(zip);
  
})

When(/^User enter the phone "([^"]*)"$/, async (phone) => {
    
  await register.enterPhoneNumber(phone);
  
})

When(/^User enter the password "([^"]*)"$/, async (password) => {
    
  await register.enterPassword(password);
  
})
When(/^User enter the confirmpassword "([^"]*)"$/, async (confirmpass) => {
    
  await register.enterConfirmPassword(confirmpass);
  
})
  
When(/^User enter the gender "([^"]*)"$/, async (gender) => {
    
  await register.selectGender(gender);
  
})

When(/^User enter the month "([^"]*)"$/, async (month) => {
    
  await register.selectBirthMonth(month);
  
})

  When(/^User fill "([^"]*)", "([^"]*)", "([^"]*)", "("[^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, async (fname, lname, add1, add2, city, state, zip,phone, password, confirmpassword,gender, month) => {
    await register.enterRegistrationData(fname,lname, add1,add2,city,state,zip,phone, password,confirmpassword,gender,month)
  })

  When(/^I click on Register button$/, async () => {
    await register.clickRegisterButton();
  })

  When(/^User click on Keep Original button$/, async () => {
    await register.clickKeepOriginalButton();
  })
  
  When(/^User enter the product in search box "([^"]*)"$/, async (product) => {
    await productPage.searchForProduct(product);
    await browser.sleep(2000);
  })
  
    When(/^I Click on Search button$/, async () => {
      await productPage.clickSearchButton();
      await browser.sleep(3500);
  })
  
  When(/^I click on table product$/, async () => {
    await productPage.selectProduct();
    await browser.sleep(3000);
  })
  When(/^I click on choose option$/, async () => {
    await productPage.chooseProductSize();
    await productPage.clickaddqty();

  })
  When(/^I Click on Add to Cart$/, async () => {
    await productPage.addToCart();
    await browser.sleep(2000);
  })
  When(/^I Click on Cart Icon$/, async () => {
    await productPage.clickCartIcon();
    await browser.sleep(2000);
  })
  When(/^I Click on Secure checkout$/, async () => {
    await productPage.clickSecureCheckout();
    await browser.sleep(2000);
  })
  When(/^I Enter the Card Number "([^"]*)"$/, async (cardnum) => {
    await productPage.enterCreditCardNumber(cardnum);
    await browser.sleep(2000);
  })
  
  When(/^I Enter the Expiry Date "([^"]*)"$/, async (expirydate) => {
    await productPage.enterExpiryDate(expirydate);
    await browser.sleep(2000);
  })
  When(/^I Enter the CVV number "([^"]*)"$/, async (cvv) => {
    await productPage.enterCvvNumber(cvv);
    await browser.sleep(2000);
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
 // await openAccount.selectACurrency(currency);
//   //await browser.sleep(3000);
// })

// Then(/^I should click on Process to create an account$/, async () => {
//   await openAccount.ProcessIt();
//   //log.debug("I should click on Process to create an account");

// })



