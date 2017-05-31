import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { HttpInterceptorService } from 'ng-http-interceptor';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class NaverServices {

  baseUrl: string;
  headers: Headers;

  constructor(private http: Http, private httpInterceptor: HttpInterceptorService) {
    this.headers = new Headers();
    this.headers.append('X-Naver-Client-Id', environment.naverClientId);
    this.headers.append('X-Naver-Client-Secret', environment.naverClientSecret);

    httpInterceptor.request().addInterceptor((data, method) => {
      console.log('request handle start');
      console.log(method, data);
      console.log('request handle end');
      return data;
    });

    httpInterceptor.response().addInterceptor((res, method) => {
      return res.do(
        r => console.log(method, r)
      );
    });
  }

  getShortlyUrl(url: string): any {
    const shortlyApi = 'https://openapi.naver.com/v1/util/shorturl?url=' + url;
    return this.http.post(shortlyApi, null, {headers: this.headers}).toPromise().then(res => res).catch(this.errorHandle);
  }

  private errorHandle(error: any): any {
    console.error('error =>', error);
    return Promise.reject(error.message || error);
  }

}
