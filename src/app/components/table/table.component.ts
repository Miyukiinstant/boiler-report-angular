import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Report } from 'src/app/interfaces/report';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  constructor(private tables:TableService) { }
  @Input() TableComponent:Report[] = []
  
  displayedColumns: string[] = ['title', 'date', 'id']
  
  deleteRow(form:NgForm):void{
    this.tables.updateTable(form).subscribe(result=>{
      this.tables.getTable().subscribe(table=>{
        this.TableComponent = table
      })
    })
    
  }

  ngOnInit(): void {
    this.TableComponent = []
    this.tables.getTable().subscribe(_table=>{
      this.TableComponent = _table
    })
  }

}
