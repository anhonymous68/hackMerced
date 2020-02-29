import { Component, OnInit} from '@angular/core';
import { CompileStringService } from 'src/service/compileString.Service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  codeString : string;

  constructor(private compileStringService : CompileStringService) { 
    
  }

  ngOnInit() {
    this.compileStringService.CompileString(this.codeString);
  }

  onClickTry()
  {
    console.log('codeString: ',this.codeString);
    console.log('eval()', eval(this.codeString));
  }
}
