import { Component } from '@angular/core';
import { HomeComponent } from '../app/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  template: `
    <main> 
      <header class="brand-name"> 
        <img class="brand-logo" width="200px" src="/assets/logo.svg" alt="logo bmw" aria-hidden="true"> 
      </header> 
      <section class="content"> 
        <router-outlet></router-outlet> 
      </section> 
    </main>
    `,
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  title = 'home';
}
