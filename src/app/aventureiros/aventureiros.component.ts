import { Component } from '@angular/core';
import { Aventureiro } from '../aventureiro';
import { AventureiroService } from '../aventureiro.service';



@Component({
  selector: 'app-aventureiros',
  templateUrl: './aventureiros.component.html',
  styleUrls: ['./aventureiros.component.css']
})
export class AventureirosComponent {


  constructor(private aventureiroservice: AventureiroService){}

  aventureiro: Aventureiro = {
    nome: this.getNome(),
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
}


getNome(): string {
  return this.aventureiroservice.getName();
}


}
