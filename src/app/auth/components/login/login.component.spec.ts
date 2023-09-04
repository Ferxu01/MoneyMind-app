import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('(3) Text of LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get invalid form', () => {
    const dni = component.loginForm.controls['dni'];
    dni.setValue('12345678X');

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('should check valid "dni" format', () => {
    const dni = component.loginForm.controls['dni'];
    dni.setValue('12345678X');

    expect(dni.value).toMatch(/^\d{8}[a-zA-Z]$/);
  });
});
