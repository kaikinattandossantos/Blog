import { Component } from '@angular/core';
import { ImagesComponent } from "../../components/images/images.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { BarraPesquisaComponent } from "../../components/barra-pesquisa/barra-pesquisa.component";
import { MenuBar2Component } from "../../components/menu-bar-2/menu-bar-2.component";

@Component({
  selector: 'app-home',
  imports: [ImagesComponent, MenuBarComponent, BarraPesquisaComponent, MenuBar2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
