import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Servers } from 'src/app/config/api';
import { PERSONALIZACION_KEY } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class PersonalizacionService {
  private personalizacionList = new BehaviorSubject<any>([]);
  public personalizacionList$ = this.personalizacionList.asObservable();
  private baseUrl = Servers.FRESHFOOD.baseUrl + "articulos-personalizacion";
  
  constructor(private http: HttpClient) { }

  listarProductos() {
    return productos;
  }

  getPersonalizacionObservable() {
    const personalizacion = JSON.parse(localStorage.getItem(PERSONALIZACION_KEY) || '[]');
    this.personalizacionList.next(personalizacion);
    return this.personalizacionList.asObservable();
  }

  actualizarPersonalizacion(productos: any) {
    localStorage.setItem(PERSONALIZACION_KEY, JSON.stringify(productos));
    this.personalizacionList.next(productos);
  }

}

const productos = [
  {
    id: 1, categoria: 'Verduras', productos: [{
      "nombre_producto": "Producto 1",
      "cod_producto": "PRODUCTOCOD1"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    }]
  },
  {
    id: 2, categoria: 'Frutas', productos: [{
      "nombre_producto": "Producto 1",
      "cod_producto": "PRODUCTOCOD1"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    },
    {
      "nombre_producto": "Producto 2",
      "cod_producto": "PRODUCTOCOD2"
    }]
  }
];