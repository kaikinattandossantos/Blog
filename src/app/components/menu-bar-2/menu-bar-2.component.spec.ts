import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBar2Component } from './menu-bar-2.component';

describe('MenuBar2Component', () => {
  let component: MenuBar2Component;
  let fixture: ComponentFixture<MenuBar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
