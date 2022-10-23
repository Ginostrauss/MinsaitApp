import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {DividerModule} from 'primeng/divider';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SidebarModule} from 'primeng/sidebar';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DatagridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DividerModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    SidebarModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DatagridComponent
  ]
})
export class SharedModule { }
