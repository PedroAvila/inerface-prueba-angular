
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador.model';

@Injectable({providedIn: 'root'})
export class TrabajadorService {

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Trabajador[]> {
        return this.httpClient.get<Trabajador[]>('https://localhost:7076/api/trabajadores');
    }
    
}