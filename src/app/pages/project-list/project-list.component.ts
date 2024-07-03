import { Component, OnInit, ViewChild } from '@angular/core';
import {ProjectsDataSource} from '../../datasources/ProjectsDataSource'
import { ProjectApiService } from '../../../../api';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {

displayedColumns=["id","name","description","action"];

  dataSource: ProjectsDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private projectApi: ProjectApiService){
      this.dataSource = new ProjectsDataSource(projectApi);
  }
  ngOnInit(): void {
    
    this.loadData();
  }
  loadData() {
   this.dataSource.load();
   
  }


  edit(_t26: any) {
    throw new Error('Method not implemented.');
    }
    delete(_t26: any) {
    throw new Error('Method not implemented.');
    }
    sortData($event: Event) {

    console.log(this.paginator);

      }

}
