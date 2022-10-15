import { Usuario } from './usuarios/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cartao } from './usuarios/cartao';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) {

  }

  salvar( usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios', usuario);
  }

  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios');
  }

  salvarCartao( cartao: Cartao) : Observable<Cartao> {
    return this.http.post<Cartao>('http://localhost:8080/cartoes', cartao);
  }

}
