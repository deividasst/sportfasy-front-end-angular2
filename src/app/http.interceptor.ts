import {Injectable} from '@angular/core';
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {TokenHolderServise} from './web_components/shared/tokenholder.srv';

@Injectable()
export class InterceptedHttp extends Http {
    private router: Router;

    constructor(backend: ConnectionBackend,
                defaultOptions: RequestOptions,
                router: Router,
                private tokenHolder: TokenHolderServise) {
        super(backend, defaultOptions);
        this.router = router;
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
        if (localStorage.getItem('id_token')) {
            options.headers.append('x-access-token', localStorage.getItem('id_token'));
        }
        return options;
    }

    // private refreshUSerData() {
    //     this.get('/api/users')
    //         .map((res: Response) => res.json()).subscribe(
    //         obj => {
    //             this.tokenHolder.setUserID(obj._id);
    //             this.tokenHolder.setUserEmail(obj.email);
    //             this.tokenHolder.setUserName(obj.name);
    //         }
    //     )
    // }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err) => {
            if (err.status !== 200) {
                switch (err.status) {
                    case 401:
                        console.log('BAD CREDENTIALS');
                        return Observable.throw(err);
                    case 403:
                        this.router.navigate(['/login']);
                        return Observable.throw(err);
                    case 409:
                        return Observable.throw(err);
                }
            }
        });
    }
}



