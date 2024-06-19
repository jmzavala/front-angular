import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { ProjectComponent } from "../project/project.component";
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'app-portafolio',
    standalone: true,
    templateUrl: './portafolio.component.html',
    styleUrl: './portafolio.component.scss',
    imports: [CommonModule, ProjectComponent]
})
export class PortafolioComponent implements OnInit {

  projects:Project[]=[];
  constructor(private projectService:ProjectService){

  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  
}
