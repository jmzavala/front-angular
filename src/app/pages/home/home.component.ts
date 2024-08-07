import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProjectComponent } from '../project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  projects:Project[];

  constructor(private projectService:ProjectService){
    
  }
  ngOnInit(): void {
    this.projects = this.projectService.getOnlyFav();
  }

}
