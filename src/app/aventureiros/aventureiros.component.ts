import { Component, NgModule } from '@angular/core';
import { Aventureiro } from '../aventureiro';
import { AventureiroService } from '../aventureiro.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-aventureiros',
  templateUrl: './aventureiros.component.html',
  styleUrls: ['./aventureiros.component.css']
})


export class AventureirosComponent {
 
  constructor(private aventureiroservice: AventureiroService){
    this.aventureiro.modificadores_atributos.for=this.getModAtributo(this.aventureiro.atributos.for);
    this.aventureiro.modificadores_atributos.des=this.getModAtributo(this.aventureiro.atributos.des);
    this.aventureiro.modificadores_atributos.con=this.getModAtributo(this.aventureiro.atributos.con);
    this.aventureiro.modificadores_atributos.sab=this.getModAtributo(this.aventureiro.atributos.sab);
    this.aventureiro.modificadores_atributos.int=this.getModAtributo(this.aventureiro.atributos.int);
    this.aventureiro.modificadores_atributos.car=this.getModAtributo(this.aventureiro.atributos.car);
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
}
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
    console.log("deveria ser 1")
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
  return  Math.floor((Math.random() * 5) +1)+Math.floor((Math.random() * 5) +1)+Math.floor((Math.random() * 5) +1);

}

novoAventureiro(){

  this.aventureiro.atributos.for = this.randonAtribute();
  this.aventureiro.atributos.int = this.randonAtribute();
  this.aventureiro.atributos.sab = this.randonAtribute();
  this.aventureiro.atributos.des = this.randonAtribute();
  this.aventureiro.atributos.con = this.randonAtribute();
  this.aventureiro.atributos.car = this.randonAtribute();
  this.aventureiro.nome= this.getNome();
  this.aventureiro.classe= this.getClasse();
  this.aventureiro.alinhamento= this.getAlinhamento();
  

  this.aventureiro.modificadores_atributos.for=this.getModAtributo(this.aventureiro.atributos.for);
  this.aventureiro.modificadores_atributos.des=this.getModAtributo(this.aventureiro.atributos.des);
  this.aventureiro.modificadores_atributos.con=this.getModAtributo(this.aventureiro.atributos.con);
  this.aventureiro.modificadores_atributos.sab=this.getModAtributo(this.aventureiro.atributos.sab);
  this.aventureiro.modificadores_atributos.int=this.getModAtributo(this.aventureiro.atributos.int);
  this.aventureiro.modificadores_atributos.car=this.getModAtributo(this.aventureiro.atributos.car);


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


}
