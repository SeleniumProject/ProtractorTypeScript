import { browser, element, by, protractor } from "protractor";
import { Util } from "../Utility/Util";
import { pageEl } from "../Utility/pageEl";
import { threadId } from "worker_threads";
const log = require("../config/log4js").default;

export class CreateAnAccount{

    custData = require("../testdata/Cust");

    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    emailaddresstxt = new pageEl(by.id('Address_Email'));
    emaillogintxt = new pageEl(by.id('BaseLoginViewModel_Email'));
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
    // email = this.custData.customers.emailaddr;
    // firstname = this.custData.customers.firstname;
    // lastname = this.custData.customers.lastname;
    // addr1 = this.custData.customers.add1;
    // addr2 = this.custData.customers.add2;
    // city = this.custData.customers.city;
    // state = this.custData.customers.state;
    // pincode = this.custData.customers.pincode;
    // password = this.custData.customers.password;
    // confirmpassword = this.custData.customers.confirmpassword;
    // gender = this.custData.customers.gender;
    // month = this.custData.customers.month;
  

    //lastname = this.custData.customers.lastname;

    async clickKeepOriginalButton() {
        await this.keeporiginal.click();
    }
    async clickRegisterButton() {
        await browser.sleep(4000);
        await this.registerbtn.click();
        await browser.sleep(4000);
    }
    async enterEmailinLoginPage(txt: string) {
        await this.emaillogintxt.sendKeys(txt);
    }
    async enterEmailAddresstxt(txt: string){
        await this.emailaddresstxt.sendKeys(txt);
    }

    async enterFirstName(txt: string) {
        await browser.refresh();
        await this.fnametxt.sendKeys(txt);
    }

    async enterLastName(txt: string) {
        
        await this.lnametxt.sendKeys(txt);
    }

    async enterAddressone(txt: string) {
        
        await this.addr1txt.sendKeys(txt);
    }

    async enterAddresstwo(txt: string) {
        
        await this.addr2txt.sendKeys(txt);
    }

    async enterCity(txt: string) {
        
        await this.citytxt.sendKeys(txt);
    }

    async selectState(txt: string) {
        
        await this.statetxt.selectByOptionText(txt);
    }

    async enterPinCode(txt: string) {
        
        await this.zipcodetxt.sendKeys(txt);
    }

    async enterPhoneNumber(txt: string) {
        
        await this.phonenumtxt.sendKeys(txt);
    }

    async selectGender(txt: string) {
        
        await this.gendermaledrp.selectByOptionText(txt);
    }

    async selectBirthMonth(txt: string) {
        
        await this.monthdrp.selectByOptionText(txt);
    }
    async enterPassword(txt: string) {
        
        await this.passwordtxt.sendKeys(txt);
    }
    async enterConfirmPassword(txt: string) {
        
        await this.confirmpasswordtxt.sendKeys(txt);
    }
    async enterRegistrationData(fname: string, lname: string, addr1: string, addr2: string, city: string, state: string, pincode: string, phone: string, password: string, confirmpassword: string, gender: string, month: string ) {
        
        // await this.emailaddresstxt.sendKeys(this.email);
        await this.fnametxt.sendKeys(fname);
        await this.lnametxt.sendKeys(lname);
        await this.addr1txt.sendKeys(addr1);
        await this.addr2txt.sendKeys(addr2);
        await this.citytxt.sendKeys(city);
        await this.statetxt.selectByOptionText(state);
        await this.zipcodetxt.sendKeys(pincode);
        await this.phonenumtxt.sendKeys(phone);
        await this.passwordtxt.sendKeys(password);
        await this.confirmpasswordtxt.sendKeys(confirmpassword);
        await this.gendermaledrp.selectByOptionText(gender);
        await this.monthdrp.selectByOptionText(month);      
        await this.registerbtn.click();
        await this.keeporiginal.click();
    }
    

}