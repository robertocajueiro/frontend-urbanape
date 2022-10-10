import { Usuario } from './usuarios/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) {

  }

  salvar( usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios', usuario);
  }

  getUsuario() : Usuario{
    let usuario: Usuario = new Usuario();
    usuario.nome = 'Fulano de Tal'
    usuario.email = 'fulano@localhost'
    return usuario;
  }
}
