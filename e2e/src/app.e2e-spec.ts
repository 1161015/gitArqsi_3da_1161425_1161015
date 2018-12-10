import { AppPage } from './app.po';
import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bem-vindo à SiC!');
  });

  it('Should locate the nav bar', () => {
    expect(page.getNavBar()).toBeDefined();
  });

  it('Should locate the footer', () => {
    expect(page.getFooter()).toBeDefined();
  });

  it('Should get the home button on the nav bar', () => {
    expect(page.getHomeButton().getText()).toEqual('Home');
  });

  it('Should locate the dropdown bar', () => {
    expect(page.getDropdown()).toBeDefined();
  });

  it('Should find the gerir catalogo button', () => {
    expect(page.getGerirCatalogo().getText()).toEqual('Gerir Catálogo');
  });

  it('Should redirect to the home page when home is clicked', () => {
    const home = page.getHomeButton();
    home.click();
    expect(browser.driver.getCurrentUrl()).toContain('/#home');
  });

});
