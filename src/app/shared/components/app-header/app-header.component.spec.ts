import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('(2) Test of AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [AppHeaderComponent]
    });
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app-header component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'MoneyMind'`, () => {
    expect(component.title).toEqual('MoneyMind');
  });
});
