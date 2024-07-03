import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { ProjectComponent } from "../project/project.component";
import { ProjectService } from '../../services/project.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Project, ProjectApiService } from '../../../../api';
import { ProjectListComponent } from "../project-list/project-list.component";

@Component({
    selector: 'app-portafolio',
    standalone: true,
    templateUrl: './portafolio.component.html',
    styleUrl: './portafolio.component.scss',
    imports: [CommonModule, ProjectComponent, MatButtonModule, RouterLink,
       ProjectListComponent]
})
export class PortafolioComponent implements OnInit {

  projects:Project[]=[];
  constructor(private projectapi:ProjectApiService){

  }
  ngOnInit(): void {
   this.projectapi.getAllProjects().subscribe(
    {
      next:async(result:any)=>{
        const text =  await result.text();
        let responsePlain = JSON.parse(text);
        this.projects=responsePlain!;
      },
      error:(err)=>{

      }
    }
   )
  }

  
}
