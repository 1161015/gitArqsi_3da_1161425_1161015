import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  navigateToHome(): promise.Promise<any> {
    return browser.get('/#home');
  }

  getNavBar(): ElementFinder {
    return element(by.className('topnav'));
  }

  getFooter(): ElementFinder {
    return element(by.className('footer'));
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

  getProdutoButton(): ElementFinder {
    return this.getDropdownContent().all(by.css('.dropdown-content a')).get(0);
  }

  getItemButton(): ElementFinder {
    return this.getDropdownContent().all(by.css('.dropdown-content a')).get(1);
  }


  getGerirCatalogo(): ElementFinder {
    return this.getDropdown().all(by.css('.dropbtn')).get(0);
  }
  
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  
}
