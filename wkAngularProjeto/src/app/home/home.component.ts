import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { single } from 'src/assets/dados/graficoBarHor';
import { pizza } from 'src/assets/dados/graficoPizza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  single: any[] = [];

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;

  showXAxisLabelBarhor: boolean = true;
  showYAxisLabelBarhor: boolean = true;

  yAxisLabelBarhor: string = 'Country';
  xAxisLabelBarhor: string = 'Population';

  colorSchemeBarHor = {
    domain: ['#5252f7', '#5AA454', '#5252f9', '#5AA454']
  };


  //Grafico em pizza
  pizza: any[] = [];

  // options
  gradientPizza: boolean = true;
  showLegendPizza: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  //Deixando os graficos responsivo
  @ViewChild('resizedDiv') resizedDiv!: ElementRef;

  public previousWidthOfResizedDiv: number = 0;



  constructor() { }

  ngOnInit(){
    // Dados do banco
    //Object.assign(this, { multi });
    Object.assign(this, { single });
    Object.assign(this, { pizza });

  }

  onSelect(data: Event): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: Event): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: Event): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // Método que deixar grafico responsivo
  ngAfterViewChecked() {
    if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {

      //render your data for the chart using spread operator
      this.single = [...this.single]
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }


}
