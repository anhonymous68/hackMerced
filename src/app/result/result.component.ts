import { Component, OnInit, Input } from '@angular/core';
import { CompileStringService } from 'src/service/compileString.Service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result : string;
  
  constructor(private compileStringService : CompileStringService) { 
    
  }

  ngOnChange() {
    this.result = this.compileStringService.compileResult;

  }

  ngOnInit() {
    this.result = this.compileStringService.compileResult;
  }

}
