export interface Equipamento {
    nome: string;
    peso:number;
    preço: number

}

export interface Arma extends Equipamento {

    dano?:'1d4';

}

export interface Armadura extends Equipamento {

    ca:number;

}

