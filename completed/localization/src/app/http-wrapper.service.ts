import {Injectable} from "@angular/core";
import {Http, Response, RequestOptionsArgs, BaseRequestOptions} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class HttpWrapper {
	constructor(private http: Http) {
		
	}
	
	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		let jsonOptions: RequestOptionsArgs = this.getJSONOptions(options);
		return this.http.get(url, jsonOptions)
		.retryWhen(error => error.delay(500))
		.timeout(2000, new Error("request timed out"))
	}
	
	post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		let jsonOptions: RequestOptionsArgs = this.getJSONOptions(options);
		
		return this.http.post(url, body, jsonOptions)
	}
	
	put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		let jsonOptions: RequestOptionsArgs = this.getJSONOptions(options);
		
		return this.http.put(url, body, jsonOptions).catch((error) => {
			console.log("error: " + error.status);
			switch (error.status) {
				case 401:
					// do something
					break;
				case 403:
					// do something
					break;
			}
			
			return Observable.throw(error);
		});
	}
	
	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.http.delete(url, options);
	}
	
	getJSONOptions(options: RequestOptionsArgs = new BaseRequestOptions() ): RequestOptionsArgs {
		let contentType: string = options.headers.get("Content-Type");
		
		if ( !contentType ) {
			options.headers.append("Content-Type", "application/json");
		}
		
		return options;
	}
}