import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  rowOne:Array<string>;
  rowTwo:Array<string>;
  rowThree:Array<string>;
  rowFour:Array<string>;
  operation: string = '';
  result:number;
  

  constructor(public navCtrl: NavController) {
      this.rowOne = new Array<string>();
      this.rowOne.push('7');
      this.rowOne.push('8');
      this.rowOne.push('9');
      this.rowOne.push('Delete');

      this.rowTwo = new Array<string>();
      this.rowTwo.push('4');
      this.rowTwo.push('5');
      this.rowTwo.push('6');
      this.rowTwo.push('/');

      this.rowThree = new Array<string>();
      this.rowThree.push('1');
      this.rowThree.push('2');
      this.rowThree.push('3');
      this.rowThree.push('*');

      this.rowFour = new Array<string>();
      this.rowFour.push('0');
      this.rowFour.push('=');
      this.rowFour.push('-');
      this.rowFour.push('+');

  }

  displayData(caracter:string){
    if (caracter != '=' && caracter != 'Delete') {
      this.operation += caracter;
      document.getElementById('display').innerHTML = this.operation;
    }

    if (caracter === '='){
      try {
        this.result = eval(this.operation);
        if (!isNaN(this.result))
          document.getElementById('display').innerHTML = this.operation + '<br>= ' + this.result;
      } catch(error) {
        document.getElementById('display').innerHTML = 'Sintax Error!';  
      }
    }

    if (caracter === 'Delete'){
      this.operation = this.operation.slice(0, -1);
      document.getElementById('display').innerHTML = this.operation;
    }
  }
}


