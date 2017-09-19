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
import { MyPostsComponent } from './quick-posts/my-posts/my-posts.component';
import { FavouritePostsComponent } from './quick-posts/favourite-posts/favourite-posts.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { MenuTextComponent } from './menu/menu-text/menu-text.component';
import { RoutingComponent } from './routing/routing.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu-component', component: MenuTextComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'selected', component: SelectedComponent },
  { path: 'my-posts', component: MyPostsComponent },
  { path: 'favourite-posts', component: FavouritePostsComponent },
  { path: 'routing', component: RoutingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TrendingComponent,
    HomeComponent,
    SelectedComponent,
    MyPostsComponent,
    FavouritePostsComponent,
    SignInComponent,
    MenuTextComponent,
    RoutingComponent
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
export class AppModule {

}
