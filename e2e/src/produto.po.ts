import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Element } from '@angular/compiler';

export class ProdutoPage {

    navigateToHome(): promise.Promise<any> {
        return browser.get('/#home');
    }

    getNavBar(): ElementFinder {
        return element(by.className('topnav'));
    }

    navigateToProdutoPage(): promise.Promise<any> {
        return browser.get('/produto');
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


    getInputs(): ElementArrayFinder {
        return element.all(by.css('input'));
    }

    getMargin(): ElementFinder {
        return element(by.tagName('.margin'));
    }

    getCriarButton(): ElementFinder {
        return element.all(by.css('button')).get(1);
    }

    getEditarButton(): ElementFinder {
        return element.all(by.css('button')).get(2);
    }

    getApagarButton(): ElementFinder {
        return element.all(by.css('button')).get(3);
    }

    getListarButton(): ElementFinder {
        return element.all(by.css('button')).get(4);
    }


}