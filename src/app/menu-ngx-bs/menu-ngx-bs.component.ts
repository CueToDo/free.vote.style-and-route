import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-ngx-bs',
  templateUrl: './menu-ngx-bs.component.html',
  styleUrls: ['./menu-ngx-bs.component.css']
})
export class MenuNgxBsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
