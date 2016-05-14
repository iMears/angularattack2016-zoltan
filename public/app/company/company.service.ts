import {Injectable} from '@angular/core';

import {Http, HTTP_PROVIDERS} from '@angular/http';

@Injectable()
export class CompanyService {
    constructor(private http: Http) { }
    getName(word1, word2) {
        if (!word1 || !word2) return console.error('company service > getName > missing words');
        console.log('http://www.namemesh.com/domain-name-search/'+ word1 + word2 + '?show=1');
         return this.http.get('http-get-proxy/' + encodeURIComponent('http://www.namemesh.com/domain-name-search/'+ word1 + word2 + '?show=1'))
          .subscribe(function(result) {
              console.log(JSON.stringify(result),'test');
          });
    }
}