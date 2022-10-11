import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private service : UsuariosService) {

  }

  ngOnInit(): void {
    this.service
      .getUsuarios()
      .subscribe( resposta => this.usuarios = resposta);
  }

}
