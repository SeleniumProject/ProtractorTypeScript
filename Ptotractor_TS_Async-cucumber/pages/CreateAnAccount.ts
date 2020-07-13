import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";
import { threadId } from "worker_threads";
const log = require("../config/log4js").default;

export class CreateAnAccount{

    custData = require("../testdata/Cust");

    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    emailaddresstxt = new pageEl(by.id('Address_Email'));
    fnametxt = new pageEl(by.id('Address_FirstName'));
    lnametxt = new pageEl(by.id('Address_LastName'));
    addr1txt = new pageEl(by.id('Address_Line1'));
    addr2txt = new pageEl(by.id('Address_Line2'));
    citytxt = new pageEl(by.id('Address_City'));
    statetxt = new pageEl(by.id('Address_State'));
    zipcodetxt = new pageEl(by.id('Address_PostalCode'));
    phonenumtxt = new pageEl(by.id('Address_PhoneNumber'));
    passwordtxt = new pageEl(by.id('Password'));
    confirmpasswordtxt = new pageEl(by.id('PasswordConfirm'));
    gendermaledrp = new pageEl(by.id('Gender'));
    monthdrp = new pageEl(by.id('BirthMonth'));
    registerbtn = new pageEl(by.id('registration-submit'));
    keeporiginal = new pageEl(by.className('btn btn-default btn-keep-original'));
    // data pass from JSON
    email = this.custData.customers.emailaddr;
    firstname = this.custData.customers.firstname;
    lastname = this.custData.customers.lastname;
    addr1 = this.custData.customers.add1;
    addr2 = this.custData.customers.add2;
    city = this.custData.customers.city;
    state = this.custData.customers.state;
    pincode = this.custData.customers.pincode;
    password = this.custData.customers.password;
    confirmpassword = this.custData.customers.confirmpassword;
    gender = this.custData.customers.gender;
    month = this.custData.customers.month;
  

    //lastname = this.custData.customers.lastname;

    async enterEmailAddresstxt(txt: string){
        await this.emailaddresstxt.sendKeys(txt);
    }

    async enterRegistrationData() {
        
        // await this.emailaddresstxt.sendKeys(this.email);
        await this.fnametxt.sendKeys(this.firstname);
        await this.lnametxt.sendKeys(this.lastname);
        await this.addr1txt.sendKeys(this.addr1);
        await this.addr2txt.sendKeys(this.addr2);
        await this.citytxt.sendKeys(this.city);
        await this.statetxt.selectByOptionText(this.state);
        await this.zipcodetxt.sendKeys(this.pincode);
        await this.passwordtxt.sendKeys(this.password);
        await this.confirmpasswordtxt.sendKeys(this.confirmpassword);
        await this.gendermaledrp.selectByOptionText(this.gender);
        await this.monthdrp.selectByOptionText(this.month);      
        await this.registerbtn.click();
        await this.keeporiginal.click();
    }
    

}