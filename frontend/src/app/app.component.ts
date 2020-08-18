import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from './add.service';
import { RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  numbers = new FormGroup({
    num1: new FormControl(''),
    num2: new FormControl('', Validators.required)
  })
  constructor(private addService: AddService){

  }
  onSubmit(){
    this.addService.result(this.numbers.value)
      .subscribe(
        data => console.log('success!', data),
        error => console.log('Error!', error)
      )
  }
}
