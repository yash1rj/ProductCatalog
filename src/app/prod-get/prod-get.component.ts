import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-prod-get',
  templateUrl: './prod-get.component.html',
  styleUrls: ['./prod-get.component.css']
})
export class ProdGetComponent implements OnInit {

  products: any[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps.getAllProducts()
      .subscribe((data: any[]) => {
        this.products = data;
      });
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }

}
