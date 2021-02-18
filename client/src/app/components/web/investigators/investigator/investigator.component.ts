import { Component, OnInit,Input } from '@angular/core';
import {Investigator} from '../../../../models/investigator'
@Component({
  selector: 'upso-investigator',
  templateUrl: './investigator.component.html',
  styleUrls: ['./investigator.component.scss']
})

export class InvestigatorComponent implements OnInit {
  @Input() investigator:Investigator;
  constructor() {
    this.investigator= new Investigator(1,"Juan Carlos","Dr. En ciencias de la Computacion","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt repellat modi nihil. Consectetur, tenetur sed dolorem excepturi saepe dicta libero ea laboriosam, velit maxime neque corrupti aliquid magni? Voluptatibus, veniam.","juancarlos","www.juancarlos.com","juancarlos@gmail.com",null,null);
    
  }

  ngOnInit(): void {
  }

}


