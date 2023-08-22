import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  ngOnInit(): void {
      
    const path = anime.path("#demo-svg path");
  
    anime({
        targets:"#teste",
        translateX:path('x'),
        translateY: path('y'),
        easing: "linear",
        duration: 3000,
        loop: true
    })
  }
  
}
