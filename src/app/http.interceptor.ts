import {Injectable} from '@angular/core';
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {TokenHolderServise} from './web_components/shared/tokenholder.srv';

@Injectable()
export class InterceptedHttp extends Http {
  private router:  Router;
  private tokenHolder: TokenHolderServise;
  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions, router:  Router) {
    super(backend, defaultOptions);
    this.router = router;
    console.log('router', this.router);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    console.log(url, body, this.getRequestOptionArgs(options));
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private updateUrl(req: string) {
    return environment.origin + req;
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      if (err.status  !== 200 ) {
        console.log('interceptor method');
        this.router.navigate(['/login']);
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });
  }
}
