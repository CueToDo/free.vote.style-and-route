import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TrendingComponent } from './quick-posts/trending/trending.component';
import { HomeComponent } from './home/home.component';
import { SelectedComponent } from './quick-posts/selected/selected.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'selected', component: SelectedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TrendingComponent,
    HomeComponent,
    SelectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
