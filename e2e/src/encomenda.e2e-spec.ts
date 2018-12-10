import { browser } from 'protractor';
import { EncomendaPage } from './encomenda.po';

describe('Encomenda Page', () => {

    const albumPage = new EncomendaPage();

    beforeEach(() => {
        albumPage.navigateToEncomendaPage();
    });

    it('Should get the home button on the nav bar', () => {
        expect(albumPage.getHomeButton().getText()).toEqual('Home');
    });

    it('Should redirect to the home page when home is clicked', () => {
        const home = albumPage.getHomeButton();
        home.click();
        expect(browser.driver.getCurrentUrl()).toContain('/#home');
    });

});