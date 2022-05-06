import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  listaProdutos = [] as Produtos[]


  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(){
    this.produtosService.getProdutos().subscribe( (produtoRecebidos: Produtos[]) => {
      this.listaProdutos = produtoRecebidos;
      console.log(this.listaProdutos)
    })
  }
}
