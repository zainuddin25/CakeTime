import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  visibility: string = 'hidden'

  openNav() {
    this.visibility = 'flex'
  }

  closeNav() {
    this.visibility = 'hidden'
  }
}
