import { HttpClient } from "@angular/common/http";
import { ParseError } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Session } from "../Interfaces/Cognito.interface";
import { Usuario } from "../Interfaces/Usuario.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  loguearUsuario(usuario: Usuario) : Promise<Session> {
    return new Promise<Session>((resolve, reject) => {
      this.http.post<Session>('http://localhost:3000/cognito/sign-in', usuario).subscribe
        (value => {
          resolve(value);
        }
        , error => {
          reject({ Message: this.parseError(error), IdToken: '' })
        });
    })
  }

  private parseError(error: any): string {
    if (error.status = '404')
      return 'Error en el servidor, intente nuevamente!'
    else
      return 'Error Desconocido!'
  }
}