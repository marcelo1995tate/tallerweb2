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
  
  gestionarSesion(usuario: Usuario, url: string) : Promise<Session> {
    return new Promise<Session>((resolve, reject) => {
      this.http.post<Session>(url, usuario).subscribe
        (value => {
          const resultado = value.toString();

          if(url.includes("sign-in")){
            value = this.loguear(resultado, value);
          }else{
            value = this.registrar(value, resultado);
          }
          
          resolve(value);
          
        }
        , error => {
          reject({ Message: this.parseError(error), IdToken: '' })
          console.log(error);
          
        });
    })
  }
  
  private registrar(value: Session, resultado: string) {
    value = {
      IdToken: "",
      Message: resultado
    };
    return value;
  }

  private loguear(resultado: string, value: Session) {
    if (resultado.includes("Exception")) {
      
      value = {
        IdToken: "",
        Message: resultado.split(".")[1]
      };

    } else {
      
      value = {
        IdToken: resultado,
        Message: ""
      };
      
    }
    return value;
  }

  private parseError(error: any): string {
    if (error.status = '404')
      return 'El servidor no se encuentra disponible!'
    else
      return 'Error en el servidor, intente nuevamente!'
  }
}
