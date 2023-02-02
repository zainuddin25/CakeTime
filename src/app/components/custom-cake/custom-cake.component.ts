import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-cake',
  templateUrl: './custom-cake.component.html',
  styleUrls: ['./custom-cake.component.css']
})
export class CustomCakeComponent {
  cake: any = [
    'Birthday Cake',
    'Weading Cake',
    'Steamed Cake',
    'Pandan Cake',
    'Chocolate Cake',
    'Kemojo Cake',
    'Marble Cake',
    'Banana Cake',
    'Lemon Cake',
    'Fluffy Steamed Cake'
  ]
  
}
