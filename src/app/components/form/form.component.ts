import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Urls } from 'src/app/interfaces/urls';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private _table:TableService) { }
  tableChild:any
  submitReport(form:NgForm):void{
    this._table.postTable(form).subscribe(result=>{
      this._table.getTable().subscribe(table=>{
        this.tableChild = table
      })
    })
  }
  ngOnInit(): void {
  }

}
