import { Injectable } from '@angular/core';
import { names, classes, nomesFemininos,nomesMasculinos } from './mock-names';

@Injectable({
  providedIn: 'root'
})
export class AventureiroService {

  constructor() { }

  getName(isMasculino:boolean, isFeminino: Boolean): string {

    if (isFeminino==true && isMasculino==false) {
      const numeroEscolhido = Math.floor(Math.random()*nomesFemininos.length);
      return nomesFemininos[numeroEscolhido];
    }

    if (isFeminino==false && isMasculino==true) {
      const numeroEscolhido = Math.floor(Math.random()*nomesMasculinos.length);
      return nomesMasculinos[numeroEscolhido];
    }

    const numeroEscolhido = Math.floor(Math.random()*names.length);

    return names[numeroEscolhido];
  }

  getClasse(): string {

    const numeroEscolhido = Math.floor(Math.random()*classes.length);

    return classes[numeroEscolhido];
  }
}
