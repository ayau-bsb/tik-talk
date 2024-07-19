import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./common-ui/profile-card/profile-card.component";
import {JsonPipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProfileCardComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }

}
