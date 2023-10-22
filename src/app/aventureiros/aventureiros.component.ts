import { Component } from '@angular/core';
import { Aventureiro } from '../aventureiro';



@Component({
  selector: 'app-aventureiros',
  templateUrl: './aventureiros.component.html',
  styleUrls: ['./aventureiros.component.css']
})
export class AventureirosComponent {

  aventureiro: Aventureiro = {
    id: 1,
    nome: 'Abilio'
  }

}
