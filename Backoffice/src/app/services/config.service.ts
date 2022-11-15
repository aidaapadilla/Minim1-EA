import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/interfaces/config.interface';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    url = 'http://localhost:5432/api/config/';

    constructor(private http: HttpClient) { }

    getConfig(): Observable<Config[]> {
        return this.http.get<Config[]>(this.url);
    }

    addConfig(config: Config): Observable<Config> {
        return this.http.post<Config>(this.url, config);
    }

    deleteConfig(id: string): Observable<Config> {
        return this.http.delete<Config>(this.url + id);
    }

    updateUser(config: Config, id: string): Observable<Config> {
        console.log(id);
        console.log(config);
        return this.http.put<Config>(this.url + 'update/' + id, config)
    }
}