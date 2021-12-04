import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AddProductService} from './add-product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public addProductForm: any;

  constructor(private _builder: FormBuilder,private _service: AddProductService, private router: Router) {
    this.addProductForm = this._builder.group({
      nombre:['',[Validators.required,Validators.minLength(4)]],
      descripcion:['',[Validators.required,Validators.minLength(4)]],
      clasificacion:['',[Validators.required,Validators.minLength(4)]],
      precio:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
  }

  crearProducto(){
    this._service.postProduct(this.addProductForm).subscribe(	response => {
      this.router.navigate(["/"])
    },
    error => {
      console.log(<any>error);
    }

  );
  }

  capturarFile(fileInput: any){
    this._service.uploadFile(fileInput.target.files[0]);
  }



}
