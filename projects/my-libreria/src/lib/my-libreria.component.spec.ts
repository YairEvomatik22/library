import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibreriaComponent } from './my-libreria.component';

describe('MyLibreriaComponent', () => {
  let component: MyLibreriaComponent;
  let fixture: ComponentFixture<MyLibreriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibreriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
