import {XHRBackend, Http, RequestOptions} from '@angular/http';
import {InterceptedHttp} from './http.interceptor';
import {Router} from '@angular/router';
import {TokenHolderServise} from './web_components/shared/tokenholder.srv';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router, tokenHolder: TokenHolderServise): Http {
  return new InterceptedHttp(xhrBackend, requestOptions, router, tokenHolder);
}
