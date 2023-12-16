import { Injectable } from '@angular/core';
import { names } from './mock-names';

@Injectable({
  providedIn: 'root'
})
export class AventureiroService {

  constructor() { }

  getName(): string {

    const numeroEscolhido = Math.floor(Math.random()*names.length);

    return names[numeroEscolhido];
  }
}
