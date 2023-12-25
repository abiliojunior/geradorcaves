import { Injectable } from '@angular/core';
import { names, classes, nomesFemininos,nomesMasculinos } from './mock-names';
import { fisico, fisico2, humor, peculiaridade, personalidade } from './mock-caracteristicas';
import { armaduras, armas, kits, magias } from './mock-equipamentos';

@Injectable({
  providedIn: 'root'
})
export class AventureiroService {



  constructor() { }

  getCaracteristica():string{

    const escolha = Math.floor((Math.random()*9)+1);
    let caracteristica='' 
    if(escolha==1){
      caracteristica= fisico[Math.floor(Math.random()*fisico.length)] + ', '+ humor[Math.floor(Math.random()*humor.length)] + ' e é '+ personalidade[Math.floor(Math.random()*personalidade.length)] 
      return caracteristica;
    }else if(escolha==2){
      caracteristica= fisico[Math.floor(Math.random()*fisico.length)] + ' e é '+ fisico2[Math.floor(Math.random()*fisico2.length)] 
      return caracteristica;
    }else if(escolha==3){
      caracteristica= fisico[Math.floor(Math.random()*fisico.length)] + ' e é '+ personalidade[Math.floor(Math.random()*personalidade.length)] 
      return caracteristica;
    }else if(escolha==4){
      caracteristica= fisico[Math.floor(Math.random()*fisico.length)] + ', '+ fisico2[Math.floor(Math.random()*fisico2.length)] + 'e é '+ humor[Math.floor(Math.random()*humor.length)] 
      return caracteristica;
    }else if(escolha==5){
      caracteristica = fisico[Math.floor(Math.random()*fisico.length)]
      return caracteristica;
    }else if(escolha==6){
      caracteristica= fisico2[Math.floor(Math.random()*fisico2.length)] + ' e é '+ personalidade[Math.floor(Math.random()*personalidade.length)] 
      return caracteristica;
    }else if(escolha==7){
      caracteristica= fisico[Math.floor(Math.random()*fisico.length)] + ', '+fisico2[Math.floor(Math.random()*fisico2.length)] + ', '+ humor[Math.floor(Math.random()*humor.length)] + ' e é '+ personalidade[Math.floor(Math.random()*personalidade.length)] 
      return caracteristica;
    }else if(escolha==8){
      caracteristica = fisico2[Math.floor(Math.random()*fisico2.length)]
      return caracteristica;
    }else if(escolha==9){
      caracteristica = personalidade[Math.floor(Math.random()*personalidade.length)]
      return caracteristica;
    }
  
    return ''
    
    
  }

  getPeculiaridade():string{
    const numeroEscolhido = Math.floor(Math.random()*peculiaridade.length);
      return peculiaridade[numeroEscolhido];
  }

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

  itensdoAventureiro(): any {
    
    const numeroEscolhido = Math.floor(Math.random()*kits.length);

    return kits[numeroEscolhido];
  }

  magiasdoAventureiro() {
    const numeroEscolhido = Math.floor(Math.random()*magias.length);

    return magias[numeroEscolhido];
  }

  armasdoAventureiro() {
    const numeroEscolhido = Math.floor(Math.random()*armas.length);
    return armas[numeroEscolhido];
  }

  armaduradoAventureiro() {
    const numeroEscolhido = Math.floor(Math.random()*armaduras.length);
    return armaduras[numeroEscolhido];
  }

}
