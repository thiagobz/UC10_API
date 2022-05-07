import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginModel = new User()
  mensagem = ""
  usuarioLogado = ""

  
  onSubmit(){
    console.log(this.loginModel);

    let erroEncontrado = 0;
    
    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra =>{
      console.log("palavra atual: ", palavra)

      if (this.loginModel.email.toLowerCase().includes(palavra)) {
        console.log("palavra encontrada: ", palavra)
        this.mensagem = "Dados inválidos: " + palavra;
      }
      erroEncontrado = 1;
    })

    if(erroEncontrado == 0){
      this.LoginService.login(this.loginModel).subscribe((response)=> {
        this.usuarioLogado = response.body.user.nome
        
        // console.log(response)

        console.log(this.usuarioLogado);

        // this.router.navigateByUrl("")
      }), (respostaErro: { error: string; }) => {
        this.mensagem = respostaErro.error
      }
    }
  }

  arrowRight = faArrowRight

}
