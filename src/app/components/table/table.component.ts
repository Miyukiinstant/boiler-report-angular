import { Component, Input, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  constructor(private tables:TableService) { }
  @Input() table:any
  displayedColumns: string[] = ['title', 'date']
  
  ngOnInit(): void {
    this.tables.getTable().subscribe(table=>{
      this.table = table
    })
  }

}
