import {Component, Input, OnInit} from '@angular/core';
import {ClassificationService} from '../services/classification.service';
import {Method} from '../models/Method';

@Component({
  selector: 'app-python-classification',
  templateUrl: './python-classification.component.html',
  styleUrls: ['./python-classification.component.css']
})
export class PythonClassificationComponent implements OnInit {
  @Input() method: Method;
  private object;
  public numbers: number[] = [];
  constructor(private service: ClassificationService) {
  }

  ngOnInit(): void {
    this.generateNumbers();
    this.service.testData().subscribe(res => {
      this.object = res;
    });
    console.log(this.method);
  }

  private generateNumbers(){
    for (let i = 0; i < 100; i++){
      this.numbers.push(i);
    }
  }
}
