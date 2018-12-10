export class Acabamento {
    id: number;
    descricao: string;
    materiais:
        [{
            acabamentoID: number,
            materialID: number
        }];

}