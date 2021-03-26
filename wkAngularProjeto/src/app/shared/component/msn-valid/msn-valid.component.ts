import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msn-valid',
  templateUrl: './msn-valid.component.html',
  styleUrls: ['./msn-valid.component.css']
})
export class MsnValidComponent implements OnInit {

  @Input() condicao: boolean | undefined = false;
  @Input() msnErro: string = '';
  @Input() msnErro2: string = '';
  @Input() cssErro: string = '';



  dismissible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
