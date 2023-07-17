import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  opened = false;


  public toggleSidebar(event:boolean){
    console.log("To funcionando", "Status antigo:", this.opened, "Novo status:", event )
    this.opened = event;
  }
}
