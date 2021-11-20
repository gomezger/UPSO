import { Component, Input, OnInit } from '@angular/core';
import {Project} from '../../../../models/projects/project';

@Component({
  selector: 'upso-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.scss']
})
export class ProyectCardComponent implements OnInit {
  @Input() project:Project;
  constructor() { }

  ngOnInit(): void {
  }

}
