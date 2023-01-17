import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/services/api-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  users:any = [];
  nombre= 'octavio';

  constructor( private traerUsuarios:ApiUserService ){}


  ngOnInit(): void {
    this.traerUsuarios.getMostrar().subscribe(
      res => {
        console.log(res)
        this.users = res;
      }, err => {

      }
      );
  }
  

}
