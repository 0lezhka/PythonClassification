import {Component, OnInit} from '@angular/core';
import {Method} from './models/Method';
import {Argument} from './models/Argument';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DataVisualisation';
  public methods: Method[] = [];
  public chosenMethod: Method;

  constructor() {
  }

  private initializeMethods() {
    this.methods.push(new Method('Decision Tree', [new Argument('number', 'Minimum sample split'),
      new Argument('number', 'Random state'), new Argument('number', 'Max Depth')]));
    this.methods.push(new Method('Random Forest', [new Argument('number', 'N Estimators'),
      new Argument('number', 'Max Depth'), new Argument('number', 'Minimum sample split'), new Argument('number', 'Random state')]));
    this.methods.push(new Method('Extra Trees', [new Argument('number', 'N Estimators'),
      new Argument('number', 'Max Depth'), new Argument('number', 'Minimum sample split'), new Argument('number', 'Random state')]));
    this.methods.push(new Method('Logistic Regression', [new Argument('string', 'Class weight'),
      new Argument('string', 'Multiclass'), new Argument('string', 'Solver')]));
    this.methods.push(new Method('MLPClassifier', [new Argument('list', 'Hidden Layer Sizes'),
      new Argument('string', 'Activation'), new Argument('string', 'Solver'), new Argument('number', 'Alpha')]));
    this.methods.push(new Method('Linear SVC', [new Argument('string', 'Penalty'),
      new Argument('string', 'Loss'), new Argument('boolean', 'Dual'), new Argument('number', 'tol'),
        new Argument('number', 'C'), new Argument('string', 'MultiClass'), new Argument('boolean', 'Fit Intercept'),
          new Argument('number', 'Intercept Scaling'), new Argument('string', 'Class Weight'), new Argument('number', 'Verbose'),
            new Argument('number', 'Random State'), new Argument('number', 'Max Iterations')]));
    this.methods.push(new Method('SVC', [new Argument('number', 'C'), new Argument('string', 'Kernel'),
      new Argument('number', 'degree'), new Argument('string', 'Gamma'), new Argument('number', 'Coefficient 0'),
        new Argument('boolean', 'shrinking'), new Argument('boolean', 'probability'), new Argument('number', 'tol'),
          new Argument('string', 'Class Weight'), new Argument('boolean', 'Verbose'), new Argument('number', 'Max Iterations'),
            new Argument('string', 'Decision Function Shape'), new Argument('boolean', 'Random State')]));
  }

  ngOnInit(): void {
    this.initializeMethods();
  }

  setChosenMethod(method: Method) {
    this.chosenMethod = method;
  }
}
