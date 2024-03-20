import { Injectable } from '@angular/core';
import axios from 'axios';
import { MoviesData } from './movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  async get(): Promise<MoviesData> {
    try {
      const rutaArchivo = 'https://ebedguerra.github.io/api/movies.json';
      const respuesta = await axios.get(rutaArchivo);
      return respuesta.data;
      
    } catch (error) {
      console.log('Error al obtener datos');
      return Promise.reject(error);
    }
  }
}
