import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  private link = 'https://python-classification.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  public testData() {
    return this.http.get(this.link + 'test-data');
  }
}
