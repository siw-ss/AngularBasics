import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form:any;
  emailRegex:string = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
  contactRegex:string = "[789][0-9]{9}";
  constructor(fb:FormBuilder) {

    this.form = fb.group({
      fullName: ['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      contactDetails: fb.group({
        adress: ['',Validators.required],
        shippingAdress: ['',Validators.required],
        contactNo: ['',[Validators.required,Validators.pattern(this.contactRegex)]],
      })
    })


    // this.form = new FormGroup({
    //   fullName : new FormControl('',[
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]),
    //   email : new FormControl('',[
    //     Validators.required,
    //     //Validators.pattern(this.emailRegex),
    //     Validators.email
    //   ]),
    //   contactDetails : new FormGroup({
    //     adress : new FormControl('',Validators.required),
    //     shippingAdress : new FormControl('',Validators.required),
    //     contactNo : new FormControl('',[
    //       Validators.required,
    //       Validators.pattern(this.contactRegex
    //     )]),
    //   })
    // })
  }

  get fullname(){
    return this.form.get('fullName');
  }
  get email(){
    return this.form.get('email');
  }
  get contactDetails(){
    return this.form.get('contactDetails');
  }
  get adress(){
    return this.form.get('contactDetails.adress');
  }
  get ShippingAdress(){
    return this.form.get('contactDetails.shippingAdress');
  }
  get ContactNo(){
    return this.form.get('contactDetails.contactNo');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
