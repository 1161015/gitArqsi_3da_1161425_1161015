import { browser } from 'protractor';
import { ProdutoPage } from './produto.po';

describe('Produto Page', () => {

    const albumPage = new ProdutoPage();

    beforeEach(() => {
        albumPage.navigateToProdutoPage();
    });

    it('Should get the home button on the nav bar', () => {
        expect(albumPage.getHomeButton().getText()).toEqual('Home');
    });

    it('Should redirect to the home page when home is clicked', () => {
        const home = albumPage.getHomeButton();
        home.click();
        expect(browser.driver.getCurrentUrl()).toContain('/#home');
    });


    it('Should find the criar catalogo button', () => {
        expect(albumPage.getCriarButton().getText()).toEqual('Criar Produto');
    });

    it('Should find the editar produto button', () => {
        expect(albumPage.getEditarButton().getText()).toEqual('Editar Produto');
    });

    it('Should find the apagar produto button', () => {
        expect(albumPage.getApagarButton().getText()).toEqual('Apagar Produto');
    });

    it('Should find the listar produto button', () => {
        expect(albumPage.getListarButton().getText()).toEqual('Listar Produtos');
    });

    it('Should redirect to the produto page when home is clicked', () => {
        const home = albumPage.getCriarButton();
        home.click();
        expect(browser.driver.getCurrentUrl()).toContain('/produto');
    });
});