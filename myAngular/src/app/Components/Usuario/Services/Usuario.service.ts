import { HttpClient } from "@angular/common/http";
import { ParseError } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Session } from "../Interfaces/Session.interface";
import { Usuario } from "../Interfaces/Usuario.interface";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  loguearUsuario(usuario: Usuario) : Promise<Session> {
    return new Promise<Session>((resolve, reject) => {
      this.http.post<Session>('http://localhost:3000/cognito/sign-in', usuario).subscribe
        (value => {
          
          const resultado = value.toString();
                    
          if(resultado.includes("Exception")){
            
            value = {
              IdToken:"",
              Message:resultado.split(".")[1]
            }

          }else{
            
            value = {
              IdToken:resultado,
              Message:""
            }
          }
          
          resolve(value);
          
        }
        , error => {
          reject({ Message: this.parseError(error)})
        });
    })
  }

  registrarUsuario(usuario: Usuario) : Promise<Session> {
    return new Promise<Session>((resolve, reject) => {
      this.http.post<Session>('http://localhost:3000/cognito/sign-up', usuario).subscribe
        (value => {
          
          value = {
            IdToken : "",
            Message : value.toString()
          }

          resolve(value);
          
        }
        , error => {
          reject({ Message: this.parseError(error), IdToken: '' })
          console.log(error);
          
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