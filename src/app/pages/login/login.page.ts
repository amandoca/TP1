import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  lista = [
    {nome: 'Rodrigo', email: 'rodrigo@email.com', idade: 25},
    {nome: 'Maria Rita', email: 'mrita@email.com', idade: 35},
    {nome: 'Felipe', email: 'fep@email.com', idade: 19},
    {nome: 'Eduarda', email: 'duda@email.com', idade: 26},
    {nome: 'Gabriela', email: 'gab@email.com', idade: 27}
  ];

  titulo = "Usuários";

  footer = "Designed by Gabriela Cordeiro"

  constructor() { }

  ngOnInit() {
  }

  showdetails(pessoa: any){
    console.log(pessoa);
    
  }

}
