export interface Aventureiro {
    nome: string;
    atributos: {
        for:number;
        int:number;
        sab:number;
        des:number;
        con:number;
        car:number;
    };
    classe: string;
    alinhamento: string
    modificadores_atributos: {
        for:number;
        int:number;
        sab:number;
        des:number;
        con:number;
        car:number;
    };
    caracteristica:String;
    peculiaridade:string;
    dinheiro:number;
    experiencia:number;
    linguas: string;
    itens:string;
    ca:number;
    pontosdevida:number;
    dadosdevida:number;
    magias:string;
    velocidade:number;

}
