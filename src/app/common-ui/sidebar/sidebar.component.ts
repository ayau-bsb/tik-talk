import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    SubscriberCardComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    {
      leable: 'Моя страница',
      icon: 'home',
      link: ''
    },
    {
      leable: 'Чаты',
      icon: 'chats',
      link: ''
    },
    {
      leable: 'Поиск',
      icon: 'search',
      link: ''
    },

  ]
menuItem: any;

  }
