import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../usuario';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario!: Usuario;
  success: boolean = false;
  errors!: string[];

  constructor(private service: UsuariosService, private router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.usuario)
      .subscribe(response => {
        this.success = true;
        console.log(response);
    } , errorsResponse => {
      this.success = false;
      this.errors = errorsResponse.console.error();

    })
  }

  voltarParaListagem(){
    this.router.navigate(['/usuarios-lista'])
  }

}
