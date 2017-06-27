import {Injectable} from '@angular/core';
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {TokenHolderServise} from './web_components/shared/tokenholder.srv';

@Injectable()
export class InterceptedHttp extends Http {
  private router: Router;
  private tokenHolder: TokenHolderServise;

  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions, router: Router, tokenHolder: TokenHolderServise) {
    super(backend, defaultOptions);
    this.router = router;
    this.tokenHolder = tokenHolder;
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
    console.log('intercepted post');
    return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
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
    if (this.tokenHolder.getToken()) {
      options.headers.append('x-access-token', this.tokenHolder.getToken());
    }
    return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
        console.log('log err');
      if (err.status !== 200) {
        this.router.navigate(['/login']);
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });
  }
}



