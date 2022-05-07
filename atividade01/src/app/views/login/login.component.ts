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

  userModel = new User("", "")
  
  onSubmit(){
    console.log(this.userModel.email);
    console.log(this.userModel.password);
  }

  arrowRight = faArrowRight

}
