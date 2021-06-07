import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultaswin',
  templateUrl: './consultaswin.component.html',
  styleUrls: ['./consultaswin.component.scss']
})
export class ConsultaswinComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }
  ngOnInit(): void {
  }

}
