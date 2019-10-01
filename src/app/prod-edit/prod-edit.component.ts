import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {

  prodUpdateForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private ps: ProductsService) {
    this.prodUpdateForm = this.fb.group({
      prodname: ['', [Validators.required, Validators.minLength(3)]],
      proddesc: ['', [Validators.required, Validators.minLength(3)]],
      prodprice: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.getProduct(params.id).subscribe(res => {
        this.product = {
          prodname: res.prodname,
          proddesc: res.proddesc,
          prodprice: res.prodprice
        };
        // console.log("res: ", this.product);
        this.prodUpdateForm.setValue(this.product);
      });
    });
  }

  updateProduct() {
    // console.log(this.prodUpdateForm.value);
    this.route.params.subscribe(params => {
      // console.log(params.id);
      this.ps.updateProduct(this.prodUpdateForm.value, params.id).subscribe(
        (data)  => {
          console.log("PUT Request is successful ", data);
          this.router.navigate(['products']);
        },
        (error)  => {
          console.log("Error", error);
        }
      );
    });
  }
}