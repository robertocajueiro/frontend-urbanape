import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios!: Usuario[];

  constructor( private service : UsuariosService, private router: Router) {

  }

  ngOnInit(): void {
    this.service
      .getUsuarios()
      .subscribe( resposta => {
        this.usuarios = resposta;
        console.log(this.usuarios);
    });
  }

  novoCadastro(){
    this.router.navigate(['/usuarios-form'])
  }

}
