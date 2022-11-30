import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//--proxy-config src/proxy.config.json 
@Injectable({
    providedIn: 'root'
})
export class TestimonyService {

    constructor(private http: HttpClient) {

    }
    getTestimony(): Observable<any> {
        return this.http.get<any>("api/Testimony");
    }
}