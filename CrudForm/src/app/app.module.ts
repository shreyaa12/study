import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],

  exports:[
    BrowserModule, 
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
