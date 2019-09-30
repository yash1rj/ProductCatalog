import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {

  prodUpdateForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.prodUpdateForm = this.fb.group({
      prodname: ['', [Validators.required, Validators.minLength(3)]],
      proddesc: ['', [Validators.required, Validators.minLength(3)]],
      prodprice: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      this.ps.editProduct(params.id).subscribe(res => {
        this.product = res;
      });
    });*/
  }

  updateProduct(prodname, proddesc, prodprice, id) {
    this.route.params.subscribe(params => {
      // this.ps.updateProduct(prodname, proddesc, prodprice, params.id);
      this.router.navigate(['products']);
    });
  }
}