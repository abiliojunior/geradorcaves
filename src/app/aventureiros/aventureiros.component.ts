import { Component, NgModule } from '@angular/core';
import { Aventureiro } from '../aventureiro';
import { AventureiroService } from '../aventureiro.service';
import { FormsModule } from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-aventureiros',
  templateUrl: './aventureiros.component.html',
  styleUrls: ['./aventureiros.component.css']
})


export class AventureirosComponent {
  
 
  constructor(private aventureiroservice: AventureiroService){}

  isCheckedHomem: boolean = false;
  isCheckedMulher: boolean = false;
  isCheckedEquipamentos: boolean = false;
  isCheckedMagias: boolean = false;
  isCheckedArma: boolean = false;


  aventureiro: Aventureiro = {
    nome: this.getNome(),
    classe: this.getclasse(),
    atributos: {
      for:this.randonAtribute(),
      int:this.randonAtribute(),
      sab:this.randonAtribute(),
      des:this.randonAtribute(),
      con:this.randonAtribute(),
      car:this.randonAtribute(),
  }
}

randonAtribute(){
  //return  Math.floor(Math.random() * 3)+ Math.floor(Math.random() * 3) + Math.floor(Math.random() * 3);
  return  Math.floor((Math.random() * 5) +1)+Math.floor((Math.random() * 5) +1)+Math.floor((Math.random() * 5) +1);

}

novoAventureuro(){
  this.aventureiro.atributos.for = this.randonAtribute();
  this.aventureiro.atributos.int = this.randonAtribute();
  this.aventureiro.atributos.sab = this.randonAtribute();
  this.aventureiro.atributos.des = this.randonAtribute();
  this.aventureiro.atributos.con = this.randonAtribute();
  this.aventureiro.atributos.car = this.randonAtribute();
  this.aventureiro.nome= this.getNome();
  this.aventureiro.classe= this.getclasse();

  this.isCheckedArma = false;
  
  console.log("aventureiro", (this.isCheckedEquipamentos?"com equipamento":"sem Equipamento"))
  console.log("aventureiro", (this.isCheckedMagias?"com Magias":"Sem meagias"))
  console.log("aventureiro", (this.isCheckedArma?"com arma":"desarmado"))
  console.log("aventureiro", (this.isCheckedHomem?"Homem":"NAo Homem"))
  console.log("aventureiro", (this.isCheckedMulher?"Mulher":"Não Mulher"))
}


getNome(): string {
  return this.aventureiroservice.getName();
}

getclasse():string {

  return this.aventureiroservice.getClasse();
}


}
