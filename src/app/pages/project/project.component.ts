import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'card-project',
  standalone: true,
  imports: [CommonModule, MatCardModule ,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
 @Input() project:Project;

 constructor(private projectService:ProjectService){
 }
 public like(){ 
  this.projectService.like(this.project.id!);
 }

}
