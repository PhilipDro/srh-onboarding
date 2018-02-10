import { Injectable } from '@angular/core';

import { Module } from './module';
import { MODULES } from './mock-modules';

@Injectable()
export class ModulesService {

  constructor() { }

  getModules(): Module[] {
    return MODULES;
  }

}
