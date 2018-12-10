
export class Material {
    id: number;
    descricao: string;
    acabamentos:
        [{
            acabamentoID: number,
            materialID: number
        }];
    produtos: [{
        produtoID: number,
        materialID: number
    }];
}