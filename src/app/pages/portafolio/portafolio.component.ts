import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { ProjectComponent } from "../project/project.component";

@Component({
    selector: 'app-portafolio',
    standalone: true,
    templateUrl: './portafolio.component.html',
    styleUrl: './portafolio.component.scss',
    imports: [CommonModule, ProjectComponent]
})
export class PortafolioComponent {

  projects:Project[]=[
    {
    name:"Sitio producto",
    stars:2,
    tag:["HTML","CSS"]
  },
  {
    name:"Sitio Autos",
    stars:1,
    tag:["HTML","IMG"]
  },
  {
    name:"Sitio producto",
    stars:4,
    tag:["HTML"]
  },
];

}
