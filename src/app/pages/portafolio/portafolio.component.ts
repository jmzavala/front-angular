import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { ProjectComponent } from "../project/project.component";
import { ProjectService } from '../../services/project.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-portafolio',
    standalone: true,
    templateUrl: './portafolio.component.html',
    styleUrl: './portafolio.component.scss',
    imports: [CommonModule, ProjectComponent, MatButtonModule, RouterLink]
})
export class PortafolioComponent implements OnInit {

  projects:Project[]=[];
  constructor(private projectService:ProjectService){

  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  
}
