import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  name: string = "Bobby";

  imageSrc: string = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): void {
    alert("Bonjour !");
  }

}
