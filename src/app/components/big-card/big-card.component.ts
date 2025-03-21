import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';
declare var bootstrap: any; // Evita erro de tipagem do Bootstrap

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit, AfterViewInit {

  @Input()
  carouselImages: string[] = [];

  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  Id: string = "0";

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      let myCarousel = this.elementRef.nativeElement.querySelector('#carouselExample');
      if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
          interval: 3000, // Tempo de transição (3 segundos)
          wrap: true // Permite loop no carrossel
        });
      }
    }, 500); // Pequeno delay para garantir a renderização
  }
}


