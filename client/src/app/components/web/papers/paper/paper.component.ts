import { PaperService } from './../../../../services/papers/paper.service';
import { SessionService } from './../../../../services/storage/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Paper } from './../../../../models/papers/paper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent extends StatusComponent implements OnInit {
  public paper: Paper;
  public papers: Array<Paper>;

  constructor(
    protected _router: Router,
    protected _sesion: SessionService,
    protected _activatedRoute: ActivatedRoute,
    protected _paper: PaperService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    if (this.paper === undefined) {
      this.getPaper();
    }
  }

  getPaper(): void {
    this.setLoading();
    this.papers = this._sesion.getItem('papers'); // busco las noticias en el sesion storage

    // obtengo los parametros de la url
    this._activatedRoute.params.subscribe({
      next: ({ id, titulo_url }) => {
        this.paper = this.papers?.find((element) => element.id === id); // busco si esta en las publi guardadas
        this.getPaperAux(id, titulo_url, this.papers); // la busco en el backend
        this.getPapers();
      }
    });
  }

  protected getPaperAux(id: number, tituloUrl: string, papers: Array<Paper>): void {
    this._paper.find(id).subscribe({
      next: (response) => {
        this.setSuccess();
        this.paper = response;
        this._sesion.setItem('papers', [response, ...papers]);

        if (tituloUrl !== this.paper.titulo_url) {
          this._router.navigate(['/publicaciones/', id, this.paper.titulo_url]);
        }
      },
      error: error => this.processError(error)
    });
  }

  protected getPapers(): void {
    this.papers = this._sesion.getItem('papers');

    this._paper.all().subscribe({
      next: (response) => {
        this.papers = response;
        this._sesion.setItem('papers', response);
      },
      error: error => this.processError(error)
    });
  }

}
