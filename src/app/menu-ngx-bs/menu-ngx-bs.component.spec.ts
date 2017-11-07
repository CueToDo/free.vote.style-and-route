import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNgxBsComponent } from './menu-ngx-bs.component';

describe('MenuNgxBsComponent', () => {
  let component: MenuNgxBsComponent;
  let fixture: ComponentFixture<MenuNgxBsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNgxBsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNgxBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
