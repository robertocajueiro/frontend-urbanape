import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../usuario';
import { UsuariosService } from '../../usuarios.service';
import { Cartao } from '../cartao';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario!: Usuario;
  cartao!: Cartao
  success: boolean = false;
  errors!: string[];

  ativo = true;

  tipoCartoes = [
   { label: 'COMUM', value: 1},
   { label: 'ESTUDANTE', value: 2},
   { label: 'TRABALHADOR', value: 3},
 ];

  constructor(private service: UsuariosService, private router: Router) {
    this.usuario = new Usuario();
    this.cartao = new Cartao();
   }


  ngOnInit(): void {
    this.ativo = true;
  }



  onSubmit(){
    this.service
      .salvar(this.usuario)
      .subscribe(response => {
        this.success = true;
        console.log(response);
        this.usuario.cartao = this.cartao.id_cartao;
    } , errorsResponse => {
      this.success = false;
      this.errors = errorsResponse.console.error();

    })

    this.service
      .salvarCartao(this.cartao)
      .subscribe(res => {
        this.success = true;
        this.ativo
        console.log(res);
      })
  }

  voltarParaListagem(){
    this.router.navigate(['/usuarios-lista'])
  }

}
