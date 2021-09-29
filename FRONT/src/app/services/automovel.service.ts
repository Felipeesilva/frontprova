import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Automovel } from "../models/automovel";

@Injectable({
    providedIn: "root",
})
export class AutomovelService {
    private baseUrl = "http://localhost:5000/api/automovel";

    constructor(private http: HttpClient) {}

    list(): Observable<Automovel[]> {
        return this.http.get<Automovel[]>(`${this.baseUrl}/list`);
    }
    create(automovel: Automovel): Observable<Automovel> {
        return this.http.post<Automovel>(`${this.baseUrl}/create`, automovel);
    }
}
