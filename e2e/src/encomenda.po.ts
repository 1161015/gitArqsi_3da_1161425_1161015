import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Element } from '@angular/compiler';

export class EncomendaPage {

    navigateToHome(): promise.Promise<any> {
        return browser.get('/#home');
    }

    getNavBar(): ElementFinder {
        return element(by.className('topnav'));
    }

    navigateToEncomendaPage(): promise.Promise<any> {
        return browser.get('/encomenda');
    }

    getDropdown(): ElementFinder {
        return element(by.className('dropdown'));
    }

    getHomeButton(): ElementFinder {
        return this.getNavBar().all(by.css('a.active')).get(0);
    }

    getDropdownContent(): ElementFinder {
        return element(by.className('dropdown-content'));
    }


}