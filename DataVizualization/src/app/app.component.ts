import {Component, OnInit} from '@angular/core';
import {Method} from './models/Method';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DataVisualisation';
  public methods: Method[] = [];
  public chosenMethod: Method;
  constructor() {
  }

  private initializeMethods() {
    this.methods.push(new Method('Decision Tree', []));
    this.methods.push(new Method('Random Forest', []));
    this.methods.push(new Method('Extra Trees', []));
    this.methods.push(new Method('Logistic Regression', []));
    this.methods.push(new Method('MLPClassifier', []));
    this.methods.push(new Method('SVC', []));
  }

  ngOnInit(): void {
    this.initializeMethods();
  }

  setChosenMethod(method: Method){
    this.chosenMethod = method;
  }
}
