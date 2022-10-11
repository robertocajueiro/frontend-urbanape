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

/*   getUsuarios() : Observable<Usuario[]> {
    return null;
  } */

  getUsuarios() : Usuario[] {
    let usuario = new Usuario();
    usuario.id = 1;
    usuario.nome = 'Lucas Batista';
    usuario.email = 'lucas@localhost.com';
    usuario.dataCadastro = '11/10/2022';
    return [usuario]
  }
}
