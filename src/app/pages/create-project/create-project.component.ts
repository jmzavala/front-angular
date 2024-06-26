import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButton],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder){

    this.form = this.formBuilder.group({
      name:['',[Validators.required, Validators.maxLength(5)]],
      description:['',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]]
    });
  }


  save(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
    }
  }
}
