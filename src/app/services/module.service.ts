import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment_media } from '../../environments/environment-media';

const apiBaseUrl = environment_media.apiBaseUrl;

@Injectable()
export class ModuleService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getModuleById(id: number): Promise<any> {
    return this.http.get(apiBaseUrl + '/module/find')
      .toPromise();
  }
}
