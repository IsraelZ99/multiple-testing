import { Component, OnInit } from '@angular/core';
import * as variable from 'operationsa';

@Component({
  selector: 'app-test-operation',
  templateUrl: './test-operation.component.html',
  styleUrls: ['./test-operation.component.scss']
})
export class TestOperationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(variable.suma(5,10));
  }

  
  

}
