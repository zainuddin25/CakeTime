import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  birthdayCake: boolean = true
  weadingCake: boolean = false
  customCake: boolean = false
  selected: string = 'birthday'

  clickBirthdayCake() {
    this.birthdayCake = true
    this.weadingCake = false
    this.customCake = false

    this.selected = 'birthday'
  }

  clickWeadingCake() {
    this.birthdayCake = false
    this.weadingCake = true
    this.customCake = false

    this.selected = 'weading'
  }

  clickCustomCake() {
    this.birthdayCake = false
    this.weadingCake = false
    this.customCake = true

    this.selected = 'custom'
  }
}
