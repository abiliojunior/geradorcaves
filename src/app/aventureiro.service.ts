import { Injectable } from '@angular/core';
import { names, classes } from './mock-names';

@Injectable({
  providedIn: 'root'
})
export class AventureiroService {

  constructor() { }

  getName(): string {

    const numeroEscolhido = Math.floor(Math.random()*names.length);

    return names[numeroEscolhido];
  }

  getClasse(): string {

    const numeroEscolhido = Math.floor(Math.random()*classes.length);

    return classes[numeroEscolhido];
  }
}
