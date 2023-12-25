import { Component, NgModule } from '@angular/core';
import { Aventureiro } from '../aventureiro';
import { AventureiroService } from '../aventureiro.service';
import { FormsModule } from '@angular/forms';
import { Equipamento } from '../equipamento';



@Component({
  selector: 'app-aventureiros',
  templateUrl: './aventureiros.component.html',
  styleUrls: ['./aventureiros.component.css']
})


export class AventureirosComponent {
 
  constructor(private aventureiroservice: AventureiroService){
    this.novoAventureiro()
  }

  isCheckedHomem: boolean = false;
  isCheckedMulher: boolean = false;
  isCheckedEquipamentos: boolean = false;
  isCheckedMagias: boolean = false;
  isCheckedArma: boolean = false;

  aventureiro: Aventureiro = {
    nome: this.getNome(),
    classe: this.getClasse(),
    alinhamento: this.getAlinhamento(),
    atributos: {
      for:this.randonAtribute(),
      int:this.randonAtribute(),
      sab:this.randonAtribute(),
      des:this.randonAtribute(),
      con:this.randonAtribute(),
      car:this.randonAtribute(),
  },
  modificadores_atributos: {
    for:2,
    int:1,
    sab:2,
    des:-2,
    con:-3,
    car:-1,
},
caracteristica:"caracteristica",
peculiaridade: "Peculiaridades",
dinheiro:0,
experiencia:0,
linguas:'',
itens:'',
ca:9,
pontosdevida:0,
dadosdevida:0,
magias:'',
velocidade:0
}

getModAtributo(ValorAtributo: number): number {

    let mod: number;
   if (ValorAtributo === -3) {
    mod = -3;
  } else if (ValorAtributo >= 4 && ValorAtributo <= 5) {
    mod = -2;
  } else if (ValorAtributo >= 6 && ValorAtributo <= 8) {
    mod = -1;
  } else if (ValorAtributo >= 9 && ValorAtributo <= 12) {
    mod = 0;
  } else if (ValorAtributo >= 13 && ValorAtributo <= 15) {
    mod = 1;
  } else if (ValorAtributo >= 16 && ValorAtributo <= 17) {
    mod = 2;
  } else if (ValorAtributo === 18) {
    mod = 3;
  } else {
    // Trate casos não cobertos, se necessário
    mod = 0;
  }


  return mod;
}

randonAtribute(){
  //return  Math.floor(Math.random() * 3)+ Math.floor(Math.random() * 3) + Math.floor(Math.random() * 3);
  return Math.floor((Math.random() * 5) +1)+Math.floor((Math.random() * 5) +1)+Math.floor((Math.random() * 5) +1);

}

novoAventureiro(){

  this.aventureiro.atributos.for = this.rolarDados('3d6');
  this.aventureiro.atributos.int = this.rolarDados('3d6');
  this.aventureiro.atributos.sab = this.rolarDados('3d6');
  this.aventureiro.atributos.des = this.rolarDados('3d6');
  this.aventureiro.atributos.con = this.rolarDados('3d6');
  this.aventureiro.atributos.car = this.rolarDados('3d6');
  this.aventureiro.nome= this.getNome();
  this.aventureiro.classe= this.getClasse();
  this.aventureiro.alinhamento= this.getAlinhamento();
  this.aventureiro.caracteristica= this.getCaracteristica();
  this.aventureiro.peculiaridade= this.getPeculiaridade();
  this.aventureiro.dinheiro= this.rolarDados('3d6*10');
  this.aventureiro.experiencia = 0;
  this.aventureiro.linguas = this.getLinguas()

  this.aventureiro.modificadores_atributos.for=this.getModAtributo(this.aventureiro.atributos.for);
  this.aventureiro.modificadores_atributos.des=this.getModAtributo(this.aventureiro.atributos.des);
  this.aventureiro.modificadores_atributos.con=this.getModAtributo(this.aventureiro.atributos.con);
  this.aventureiro.modificadores_atributos.sab=this.getModAtributo(this.aventureiro.atributos.sab);
  this.aventureiro.modificadores_atributos.int=this.getModAtributo(this.aventureiro.atributos.int);
  this.aventureiro.modificadores_atributos.car=this.getModAtributo(this.aventureiro.atributos.car);

 
  if (this.isCheckedEquipamentos) {
    this.equiparAventureiro()
  }else{
    this.aventureiro.itens= '';
  }
 
  if (this.isCheckedMagias && (this.aventureiro.classe=='Mago'||this.aventureiro.classe=='Clerigo'||this.aventureiro.classe=='Elfo')) {
    this.escolherMagias()
  }else{
    this.aventureiro.magias= '';
  }
  if (this.isCheckedArma) {
    this.escolherArmas();
    this.escolherArmadura();
  }else{

  }

}
  escolherArmadura() {
    const armadura= this.aventureiroservice.armaduradoAventureiro();
    this.aventureiro.itens= armadura.nome+', '+this.aventureiro.itens;
    this.aventureiro.dinheiro -= armadura.preço;
    this.aventureiro.ca= armadura.ca
  }
  escolherArmas() {
    const armas= this.aventureiroservice.armasdoAventureiro();
    this.aventureiro.itens= armas.nome+', '+this.aventureiro.itens;
    this.aventureiro.dinheiro -= armas.preço;
    
}  
  escolherMagias() {
    const magias= this.aventureiroservice.magiasdoAventureiro();
    this.aventureiro.magias = magias  ;
  }
  equiparAventureiro() {
    const itens = this.aventureiroservice.itensdoAventureiro();
    this.aventureiro.itens = itens.nome;
  }
  getLinguas(): string {
    const inteligencia = this.aventureiro.atributos.int;
    const alinhamento = this.aventureiro.alinhamento;
    let racial = '';

    if (this.aventureiro.classe=='Elfo'){
      racial = 'elfico, ';
    }else if(this.aventureiro.classe=='Anão'){
      racial = 'ananico, ';
    }else if(this.aventureiro.classe=='Pequenino'){
      racial = 'Pequenino, ';
    }

    if (inteligencia==3)    {
      return 'não se expressa com clareza';
    }else if(inteligencia >= 4 && inteligencia <= 5){
      return 'analfabeto';
    }else if(inteligencia >= 6 && inteligencia <= 8){
      return 'lê e escreve apenas o básico';
    }else if(inteligencia >= 9 && inteligencia <= 12){
      return `Comum, ${alinhamento}, ${racial} (letrado) + 1 língua`;
    }else if(inteligencia >= 13 && inteligencia <= 15){
      return `Comum, ${alinhamento}, ${racial} (letrado) + 2 língua`;
    }else if(inteligencia >= 16){
      return `Comum, ${alinhamento}, ${racial} (letrado) + 3 língua`;
    }




    return 'error'
  }
  getPeculiaridade(): string {
    return this.aventureiroservice.getPeculiaridade();
  }
  getCaracteristica(): String {
    return this.aventureiroservice.getCaracteristica();
  }


  getNome(): string {
  return this.aventureiroservice.getName(this.isCheckedHomem, this.isCheckedMulher);
  }

getClasse():string {

  return this.aventureiroservice.getClasse();
}

getAlinhamento():string {

  const alinhamentos= ['Ordeiro','Catolico','Neutro'];

  return alinhamentos[Math.floor(Math.random()*alinhamentos.length)]
}


rolarDados(expressao:string):number{
  const regex = /^(\d+)d(\d+)([+\-*/]\d+)?$/;
  const match = expressao.match(regex);

  if (!match) {
    return 0; // A expressão não está no formato esperado
  }

  const quantidadeDados = parseInt(match[1], 10);
  const ladosDados = parseInt(match[2], 10);
  const operacao = match[3] ? match[3].charAt(0) : '+';
  const constante = match[3] ? eval(match[3].substring(1)) : 0; // Avalia a constante, se presente

  if (isNaN(quantidadeDados) || isNaN(ladosDados) || isNaN(constante)) {
    return 0; // Alguns valores não são números válidos
  }

  let resultado = 0;

  for (let i = 0; i < quantidadeDados; i++) {
    // Simulando o lançamento de dados
    const resultadoDado = Math.floor(Math.random() * ladosDados) + 1;
    resultado += resultadoDado;
  }

  // Realizando a operação com a constante
  switch (operacao) {
    case '+':
      resultado += constante;
      break;
    case '-':
      resultado -= constante;
      break;
    case '*':
      resultado *= constante;
      break;
    case '/':
      resultado /= constante;
      break;
    default:
      return 0; // Operação não suportada
  }

  return resultado;
}


}
