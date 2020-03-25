import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-libreria',
  template: `
    <p>
     Mi primera libreria!!!!!
    </p>
  `,
  styles: []
})
export class MyLibreriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
