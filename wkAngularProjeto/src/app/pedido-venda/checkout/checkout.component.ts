import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html'

})
export class CheckoutComponent implements OnInit {



  constructor(
    private carrinhoServico: CarrinhoService,

  ) { }

  ngOnInit(): void {
  }


}
