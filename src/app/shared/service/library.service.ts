import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  public readonly libraryUrl = environment.libraryUrl;
  constructor(private http: HttpClient) { }

  public get() {
    this.http.get(`${this.libraryUrl}/libraries`);
  }

  public getOne() {

  }

  public update() {

  }
}
