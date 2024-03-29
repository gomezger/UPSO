import { Router } from '@angular/router';


export class StatusComponent {

  public errores: Array<string>;
  public loading: boolean = false;
  public success: boolean = false;
  public message: string = '';

  public constructor(
    protected _router: Router
  ) { }

  /**
   * Setea en true loading. Además elimina la lista de errores
   */
  protected setLoading(): void {
    this.loading = true;
    this.errores = null;
  }

  /**
   * Crea el arreglo de error. Además setea loading en false, success en false.
   * @param errors arreglo de errores
   */
  protected setErrors(errors: Array<any>): void {
    this.loading = false;
    this.success = false;
    this.errores = errors;
  }

  /**
   * Setea el true success. Además setea en false loading y elimina la lista de errores
   */
  protected setSuccess(): void {
    this.success = true;
    this.loading = false;
    this.errores = null;
  }

  /**
   * Setea el mensaje recibido
   * @param msg
   */
  protected SetMessage(msg: string): void {
    this.message = msg;
  }

  /**
   * Setea un error por defecto
   */
  protected setDefaultError(data) {
    this.errores = ['Error al recuperar datos. Intente nuevamente'];
    console.warn(data);
  }

  /**
   * Valida una respuesta recibida de la api.
   * Setea success, loading, errores, messages, etc dependiendo del caso.
   * @param data response de la api
   */
  protected validate(data: any): boolean {
    if (data && data.status && data.status === 'success') {
      this.setSuccess();
      if (data.message) { this.SetMessage(data.message); }
      return true;
    } else if (data && data.status && data.status === 'error') {
      this.setErrors(data.errors);
      if (data.message) { this.SetMessage(data.message); }
      return false;
    } else if (data && data.status && (data.status >= 400 && data.status < 600) && data.error) {
      this.setErrors((data.error.length && data.error.length > 0) ? data.error : [data.error]);
    }
    else {
      this.setDefaultError(data);
      console.warn(data);
      return false;
    }
  }

  /**
   *
   * @param data
   */
  protected validateNoLoading(data: any): boolean {
    if (data && data.status && data.status === 'success') {
      return true;
    } else if (data && data.status && data.status === 'error') {
      return false;
    } else {
      return false;
    }
  }

  protected processError(data: any): void {
    if ((data.status >= 400 && data.status < 600)) {
      this.setErrors((
        data.error.length && data.error.length > 0)
        ? data.error
        : (data.message)
          ? [data.message]
          : [data.error]
      );
    } else {
      this.setDefaultError(data);
    }
  }


}
