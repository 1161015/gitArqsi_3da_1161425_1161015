import { browser } from 'protractor';
import { ItemPage } from './item.po';

describe('Item Page', () => {

    const albumPage = new ItemPage();

    beforeEach(() => {
        albumPage.navigateToItemPage();
    });

    it('Should get the home button on the nav bar', () => {
        expect(albumPage.getHomeButton().getText()).toEqual('Home');
    });

    it('Should redirect to the home page when home is clicked', () => {
        const home = albumPage.getHomeButton();
        home.click();
        expect(browser.driver.getCurrentUrl()).toContain('/#home');
    });


    it('Should find the criar item button', () => {
        expect(albumPage.getCriarButton().getText()).toEqual('Criar Item');
    });

    it('Should find the criar editar button', () => {
        expect(albumPage.getEditarButton().getText()).toEqual('Editar Item');
    });

    it('Should find the criar apagar button', () => {
        expect(albumPage.getApagarButton().getText()).toEqual('Apagar Item');
    });

    it('Should find the criar listar button', () => {
        expect(albumPage.getListarButton().getText()).toEqual('Listar Itens');
    });

    it('Should redirect to the produto page when home is clicked', () => {
        const home = albumPage.getCriarButton();
        home.click();
        expect(browser.driver.getCurrentUrl()).toContain('/item');
    });
});