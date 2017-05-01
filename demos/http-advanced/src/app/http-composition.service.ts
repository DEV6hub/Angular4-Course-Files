import {Injectable} from "@angular/core";
import {Http, BaseRequestOptions, RequestOptionsArgs, Response, ResponseType} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpComposition {
	constructor(private http: Http) {}
	
	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.http.get(url, options)
			.filter(response => response.type == ResponseType.Default)
	}
	
	post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		let args: RequestOptionsArgs = options ? options : new BaseRequestOptions();
		
		if ( !args.headers.has("Content-Type") ) {
			args.headers.append("Content-Type", "application/json");
		}
		
		return this.http.post(url, body, args);
	}
	
	put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.http.put(url, body, options).catch((error) => {
			console.log("error: " + error.status);
			switch (error.status) {
				case 401:
					break;
				case 403:
					break;
			}
			
			return Observable.throw(error);
		}).map((response) => {
			console.log(response.json());
			return response;
		})
	}
	
	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.http.delete(url, options);
	}
}