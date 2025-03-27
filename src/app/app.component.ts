import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraPesquisaComponent } from "./components/barra-pesquisa/barra-pesquisa.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraPesquisaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
