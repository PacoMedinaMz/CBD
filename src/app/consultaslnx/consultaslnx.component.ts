import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultaslnx',
  templateUrl: './consultaslnx.component.html',
  styleUrls: ['./consultaslnx.component.scss']
})
export class ConsultaslnxComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
   }

  ngOnInit(): void {
    
  }

  
}
