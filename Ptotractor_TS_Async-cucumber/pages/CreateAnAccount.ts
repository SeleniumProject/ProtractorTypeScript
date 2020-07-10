import { browser, element, by, protractor } from "protractor";
import { pageEl } from "../Utility/pageEl";

export class HomePage{

    //bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    myAccountMenu = new pageEl(by.id('my-accounts'));
    bankManagerLogin = new pageEl(by.buttonText('Bank Manager Login'));
    mainHeading = new pageEl(by.className('mainHeading'));

    async navigateToMyAccountPage(){
        await this.myAccountMenu.click();
    }

    async navigateToBankManagerLogin(){
        await this.bankManagerLogin.click();
    }
}