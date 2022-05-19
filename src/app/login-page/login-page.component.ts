import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  constructor(
    private fb:FormBuilder,
    private router: Router,
   
    ) { }
  myForm!: FormGroup ;

  onSubmit(form: FormGroup) {

    if(this.myForm.value.username=="Admin" && this.myForm.value.pwd=="Admin@123"){
      this.router.navigateByUrl('all-flights');
      this.myForm.reset();
    }
    else{
      alert("Try again!!!!.. Credentials not matched.")
    }




    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.username);
    console.log('pass', form.value.pwd);

  }

  ngOnInit(): void {
  
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  redirect(){
    this.router.navigateByUrl('signup');
  }
  

}
