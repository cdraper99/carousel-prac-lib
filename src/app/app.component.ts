import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // items to input into carousel
  itemArray = [
    {
      name: 'bod',
      hobby: 'fishing'
    },
    {
      name: 'faye',
      hobby: 'knitting'
    },
    {
      name: 'nic',
      hobby: 'lazy'
    },
    {
      name: 'jallen',
      hobby: 'nerding out'
    },
    {
      name: 'williams',
      hobby: 'shagging'
    },
    {
      name: 'jaggs',
      hobby: 'food'
    },
    {
      name: 'eisner',
      hobby: 'doctoring about'
    },
    {
      name: 'j bizz',
      hobby: 'juice'
    },
    {
      name: 'dimal',
      hobby: 'meggs'
    },
    {
      name: 'skilton',
      hobby: 'meggs and nerding out'
    }
  ];

}
