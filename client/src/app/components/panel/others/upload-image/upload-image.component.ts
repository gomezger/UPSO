import { ImageService } from './../../../../services/upload/image.service';
import { UserService } from './../../../../services/users/user.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'upso-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent extends StatusComponent implements OnInit {
  public file: File;
  public progress = 0;
  public velocidad = 500;
  @Output() uploadSuccess: EventEmitter<string> = new EventEmitter();
  @Input() disk = 'public';

  constructor(
    protected _router: Router,
    protected _user: UserService,
    protected _image: ImageService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }

  fileChanged(e): void {
    this.file = e.target.files[0] !== undefined ? e.target.files[0] : undefined;
    this.upload();
  }

  upload(): void {
    this.setLoading();
    this.progressBar(0, 90, true);
    const token = this._user.getToken();
    this._image.upload(this.file, this.disk, token).subscribe(
      (response) => {
        this.setSuccess();
        this.uploadSuccess.emit(response);
        this.progressBar(90, 100, false);
      },
      (error) => {
        this.processError(error);
        this.file = undefined;
        this.progress = 0;
      }
    );
  }

  // tslint:disable-next-line: typedef
  private async progressBar(begin: number, end: number, loading: boolean): Promise<any> {

    let ms = 10;

    for (let i = begin; i <= end && ((loading && this.loading) || (!loading && this.success)); i += 2) {
      this.progress = i;
      await this.sleep(ms);
      ms += this.velocidad;
    }


  }

  // tslint:disable-next-line: typedef
  async sleep(ms): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
