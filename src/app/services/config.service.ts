import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  loadConfig(): any {
    return new Promise((resolve, reject) => {

      setTimeout(() => resolve(true),5000);
        
    })
  }

  constructor() { }
}
