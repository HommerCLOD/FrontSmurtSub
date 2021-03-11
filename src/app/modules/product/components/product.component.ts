import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) {
  }


  navigate(link: string): void {
    this.router.navigate(['/' + link]);
  }
  ngOnInit(): void {
  }

}
