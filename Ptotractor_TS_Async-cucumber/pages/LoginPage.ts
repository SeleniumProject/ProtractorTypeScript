import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";
const log = require("../config/log4js").default;


export class LoginPage{
  
    custData = require("../testdata/Cust");
    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    emailtxt = new pageEl(by.id('BaseLoginViewModel_Email'));
    registerButton = new pageEl(by.id('register-btn'));
    //mainHeading = new pageEl(by.className('mainHeading'));

    emailaddrtxt = this.custData.customers.emailaddr;
    // lastname = this.custData.customers.lastname;
    // pcode = this.custData.customers.postalcode;
  
    async enterEmailAddress(){
      await this.emailtxt.sendKeys(this.emailaddrtxt);
    }

    async clickRegisterButton(){
        await this.registerButton.click();
    }
}