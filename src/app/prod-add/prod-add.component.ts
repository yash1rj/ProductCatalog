import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {

  prodAddForm: FormGroup;
  prodBody: object;

  constructor(private fb: FormBuilder) {
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
    console.log(this.prodBody);
  }
}
