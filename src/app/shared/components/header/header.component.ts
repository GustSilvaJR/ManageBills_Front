import { Component, EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {

  @Output() public toggle_sidebar = new EventEmitter();

  public status_sidebar = false;
  public search:String = "";

  public toggleSidebar(){

    this.toggle_sidebar.emit(!this.status_sidebar);
    this.status_sidebar = !this.status_sidebar;
  }

}
