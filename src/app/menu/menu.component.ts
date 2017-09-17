import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit() {

  }

  constructor(private router: Router) {

  }

  QuickPostURLs: string[] = ['/trending', '/selected', '/my-posts', '/favourite-posts'];
  MenuURLs: string[] = ['/menu-component'];

  isActive(link): boolean {
    switch (link) {
      case "QuickPosts": {
        console.log("QuickPosts" + this.router.url);
        return this.QuickPostURLs.indexOf(this.router.url) > -1;
      }
      case "Menu": {
        return this.MenuURLs.indexOf(this.router.url) > -1;
      }
      default: {
        return link == this.router.url;
      }
    }
  }

}
