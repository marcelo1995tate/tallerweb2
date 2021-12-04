import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  public url: string;
  public archivos: any = [] 

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:3000/products/create';
  }

  uploadFile(imagenParaSubir: File){
  this.archivos= []
	this.archivos.push(imagenParaSubir); 
  }

  postProduct(product:any): Observable<any>{
    let formData = new FormData();
    let precio = product.value.precio.toString();
    formData.append("NOMBRE", product.value.nombre);
    formData.append('DESCRIPCION',product.value.descripcion);
    formData.append('CLASIFICACION',product.value.clasificacion);
    formData.append('images', this.archivos[0]);
    formData.append('PRECIO',precio);
    return this._http.post(this.url, formData);
  }
}