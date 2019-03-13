import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  dogs: any;

  constructor( private http: HttpClient ) {

  }

  ngOnInit() {
    this.http.get('https://dog.ceo/api/breeds/list/all').subscribe((data) => {
      console.log(data);
      this.dogs = data;
    })
  }
}
