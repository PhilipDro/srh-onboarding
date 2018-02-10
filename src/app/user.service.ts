import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { environment } from '../environments/environment';

const apiBaseUrl = environment.apiBaseUrl;

@Injectable()
export class UserService {
  id = 6;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getUserById(id: number): Promise<any> {
    return this.http.get(apiBaseUrl + '/user/find?id=' + this.id)
      .toPromise();
  }

}
