export class Produto {
    id: number;
    nome: string;
    categoria: {taxonomia: string};
	categoriaID: number;
	materiais: [{materialID: number}];
	dimensoes:{
		altura:{
			min:number,
			max:number
		},
		largura:{
			min:number,
			max:number
		},
		profundidade:{
			min:number,
			max:number
		},
		unidade:{
			tipoUnidades: string
		}
	};
	restricao:{
		materialAcabamento:boolean,
		minOcupacao:number,
		maxOcupacao:number
	}
}