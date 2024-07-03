import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../../../api';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule ,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

  projectId:string;
  project:Project;
  constructor(private activatedRouter:ActivatedRoute, 
              private router:Router,
              private projectService:ProjectService
  )
  {
      this.activatedRouter.params.subscribe(
        params=>{
            this.projectId =params['id'];
            this.project = this.projectService.getProjectById(this.projectId);
        }
      )
  }
  back() {
    this.router.navigate(['/portafolio']);
  }
}
