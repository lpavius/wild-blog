import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

  formBuilder: FormBuilder = inject(FormBuilder)

  signUpForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  })

  // signUpForm: FormGroup

  // constructor(private formBuilder: FormBuilder) {
  //   this.signUpForm = this.formBuilder.group({
  //     username: ['', Validators.required, Validators.minLength(3)],
  //     email: ['', [Validators.required, Validators.email]],
  //   });
  // }

  onSubmit(): void {

    if (this.signUpForm.valid) {
      console.log('Formulaire envoyé avec succès', this.signUpForm.value)
    } else {
      console.log('Formulaire invalide')
    }
  }

}
