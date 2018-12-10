export class Produto {
    id: number;
    nome: string;
	categoria: {
		id:number;
		taxonomia: string;
		categoriaPaiID:number;

	};
	categoriaID: number;
	partes:[{
		filhoID: number,
		 obrigatoriedade:false
	}];
	materiais: [{
		materialID: number}];
	material:[{
		descricao: string
	}]
	dimensoes:{
		altura:{
			min:number,
			max:number,
			discreta:[{
				valor: number
			}]
		},
		largura:{
			min:number,
			max:number,
			discreta:[{
				valor: number
			}]
		},
		profundidade:{
			min:number,
			max:number,
			discreta:[{
				valor: number
			}]
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