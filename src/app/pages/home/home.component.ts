import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent],
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
