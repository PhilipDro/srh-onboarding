import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';

const apiBaseUrl = environment.apiBaseUrl;

@Injectable()
export class UserService {

  constructor() { }

}
