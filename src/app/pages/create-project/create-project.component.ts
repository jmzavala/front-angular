import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Project } from '../../../../api';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { ApiModule, ProjectApiService } from '../../../../api';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButton,
    ApiModule
  ],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {
  form:FormGroup;
  title="Crear Proyecto";
  currentProject:Project;
  mode:"create"|"update"="create";

  constructor(private formBuilder:FormBuilder,
    private projectService:ProjectService,
   private activatedRouter:ActivatedRoute,
   private server:ProjectApiService
  ){

    this.server.ping().subscribe({
      next:(value:string)=>{
      console.log(value);
    },error:(err)=>{
      console.log(err);
    }})
    this.form = this.formBuilder.group({
      name:['',[Validators.required, Validators.maxLength(45)]],
      description:['',[Validators.minLength(2),
        Validators.maxLength(100)]],
      author:[]
    });

    this.form.valueChanges.subscribe(values=>{
      console.log(values)
      //if (values.length<3) return;
      //console.log("Busqueda");
    })
    this.activatedRouter.params.subscribe(
      params=>{
          if(params['id']){
          this.currentProject = this.projectService.getProjectById(params['id']);
            this.title ="Actualizando proyecto "+this.currentProject.name;
            this.form.patchValue(this.currentProject);
            this.mode = "update";
          }
        }
    )    
  }


  save(){
    console.log(this.form);
    if(this.form.invalid){
      this.form.markAllAsTouched();
       return;
    }
if(this.mode=="create"){
    let project:Project={
      name:this.form.get('name')!.value!,
      description:this.form.get('description')!.value,
      liked:false,
    }
   
    console.log(project);
    //this.projectService.createProject(project);
    this.server.createProject(project).subscribe({
      next: (velue:Project)=>{

      },
      error: (error)=>{},
    })
  }
  return;
}
//update


}
