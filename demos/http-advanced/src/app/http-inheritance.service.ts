import {Injectable} from "@angular/core";
import {Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpInheritance extends Http {
	constructor(backend: ConnectionBackend, defaultRequestOptions: RequestOptions) {
		super(backend, defaultRequestOptions);
	}
	
	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.checkResponse(super.get(url, options));
	}
	
	post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.checkResponse(super.post(url, body, options));
	}
	
	put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.checkResponse(super.put(url, body, options));
	}
	
	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.checkResponse(super.delete(url, options));
	}
	
	checkResponse(observable: Observable<Response>): Observable<Response> {
		return observable.catch((error) => {
			if ( error.status == 401 ) {
				console.log("unauthorized");
				return Observable.empty();
			} else {
				return Observable.throw(error);
			}
		})
	}
}