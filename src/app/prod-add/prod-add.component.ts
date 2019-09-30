import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {

  prodAddForm: FormGroup;
  prodBody: object;

  constructor(private fb: FormBuilder, private ps: ProductsService, private router: Router) {
    this.prodAddForm = this.fb.group({
      prodname: ['', [Validators.required, Validators.minLength(3)]],
      proddesc: ['', [Validators.required, Validators.minLength(3)]],
      prodprice: ['', [Validators.required]]
    });  
  }

  ngOnInit() {
  }

  onSubmit() {
    this.prodBody = this.prodAddForm.value;
    // console.log(this.prodBody);
    this.ps.addProduct(this.prodBody).subscribe(
      (data)  => {
        console.log("POST Request is successful ", data);
        this.prodAddForm.reset();
        this.router.navigate(['products']);
        // this.registerservice.regSuccess(); 
      },
      (error)  => {
        console.log("Error", error);
      }
    );
  }
}
