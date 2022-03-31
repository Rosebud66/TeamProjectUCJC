import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [`
  :host ::ng-deep .p-password input {
      width: 15rem
  }
`]})
export class LoginPageComponent implements OnInit {
  
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  
  constructor() {}

  ngOnInit(): void {
  }

}
