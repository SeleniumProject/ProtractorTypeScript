import { browser, element, by, protractor } from "protractor";
import { pageEl } from "../Utility/pageEl";

export class HomePage{

    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    myAccountMenu = new pageEl(by.id('my-accounts'));
    bankManagerLogin = new pageEl(by.buttonText('Bank Manager Login'));
    mainHeading = new pageEl(by.className('mainHeading'));
    logo = new pageEl(by.xpath('//*[@alt="Collections Etc."]'));
    async navigateToMyAccountPage() {
        await this.logo.click();
        
    }

    async clickOnregisterLink(){
        await this.myAccountMenu.click();
    }
}