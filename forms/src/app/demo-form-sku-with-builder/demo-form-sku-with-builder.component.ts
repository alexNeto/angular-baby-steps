import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
