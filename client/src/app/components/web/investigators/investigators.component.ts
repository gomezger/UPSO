import { Component, OnInit } from '@angular/core';
import {InvestigatorComponent} from './investigator/investigator.component';
import {Investigator} from '../../../models/investigator'
import {InvestigatorSkeletonComponent} from './investigator-skeleton/investigator-skeleton.component';

@Component({
  selector: 'upso-investigators',
  templateUrl: './investigators.component.html',
  styleUrls: ['./investigators.component.scss']
})
export class InvestigatorsComponent implements OnInit {
  public listaInvestigadores: Array<Investigator>;
  constructor() {
    this.listaInvestigadores=[
      new Investigator(1,'Juan Perez','Doctor en Ciencias', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ducimus vero dignissimos aperiam. Quia nisi rerum debitis. Dolorum libero eaque ipsa. Eligendi in quibusdam ipsum obcaecati nobis ipsam magnam reiciendis! Molestiae, nobis quis laboriosam cumque a culpa suscipit doloremque quisquam tenetur deserunt adipisci vel molestias? Alias repellendus odit nam. Nihil illo nobis magnam commodi cupiditate culpa vel temporibus assumenda tempora?Aperiam suscipit voluptates quibusdam repellendus incidunt ipsum fugit, exercitationem voluptatem temporibus nisi quasi voluptas consequuntur ratione, sint, labore expedita distinctio officiis. Suscipit deserunt rem iusto veniam sapiente delectus perferendis illum!',
      'juanperez.linked.com','www.facebook.com','juanperez@gmail.com',null,null),
      new Investigator(2,'Mirta Lopez','Doctor en Ciencias', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ducimus vero dignissimos aperiam. Quia nisi rerum debitis. Dolorum libero eaque ipsa. Eligendi in quibusdam ipsum obcaecati nobis ipsam magnam reiciendis! Molestiae, nobis quis laboriosam cumque a culpa suscipit doloremque quisquam tenetur deserunt adipisci vel molestias? Alias repellendus odit nam. Nihil illo nobis magnam commodi cupiditate culpa vel temporibus assumenda tempora?Aperiam suscipit voluptates quibusdam repellendus incidunt ipsum fugit, exercitationem voluptatem temporibus nisi quasi voluptas consequuntur ratione, sint, labore expedita distinctio officiis. Suscipit deserunt rem iusto veniam sapiente delectus perferendis illum!',
      'juanperez.linked.com','www.facebook.com','juanperez@gmail.com',null,null),
      new Investigator(3,'Tony Stark','Doctor en Ciencias', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ducimus vero dignissimos aperiam. Quia nisi rerum debitis. Dolorum libero eaque ipsa. Eligendi in quibusdam ipsum obcaecati nobis ipsam magnam reiciendis! Molestiae, nobis quis laboriosam cumque a culpa suscipit doloremque quisquam tenetur deserunt adipisci vel molestias? Alias repellendus odit nam. Nihil illo nobis magnam commodi cupiditate culpa vel temporibus assumenda tempora?Aperiam suscipit voluptates quibusdam repellendus incidunt ipsum fugit, exercitationem voluptatem temporibus nisi quasi voluptas consequuntur ratione, sint, labore expedita distinctio officiis. Suscipit deserunt rem iusto veniam sapiente delectus perferendis illum!',
      'juanperez.linked.com','www.facebook.com','juanperez@gmail.com',null,null),
    ]
  }

  ngOnInit(): void {
  }

}
