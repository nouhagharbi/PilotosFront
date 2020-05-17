import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enjeu } from  './Enjeu';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8000";
  constructor(private httpClient: HttpClient) {
  }

   readEnjeus(): Observable<Enjeu[]>{
    return this.httpClient.get<Enjeu[]>(`${this.PHP_API_SERVER}/api/enjeus.json`);
  }

  createEnjeu(enjeus: Enjeu): Observable<Enjeu>{
    return this.httpClient.post<Enjeu>(`${this.PHP_API_SERVER}/api/enjeus`, enjeus);
    
  }

  updateEnjeu(enjeus: Enjeu,id: number){
    return this.httpClient.put<Enjeu>(`${this.PHP_API_SERVER}/api/enjeus/${id}`, enjeus);   
  }

  deleteEnjeu(id: number){
    return this.httpClient.delete<Enjeu>(`${this.PHP_API_SERVER}/api/enjeus/${id}`);
  }
}