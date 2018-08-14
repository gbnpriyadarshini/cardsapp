import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  uForm:FormGroup;

  genders = ['M','F'];

  passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}';

  constructor(private fb: FormBuilder, private userService:UserService, private router:Router) { 
    // this.uForm = new FormGroup({
    //   fName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   lName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   gender: new FormControl('',[Validators.required]),
    //   password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     city: new FormControl(),
    //     state: new FormControl(),
    //     zip: new FormControl()
    //   })
    // });
  }

  ngOnInit() {
    this.uForm = this.fb.group({
      fName: ['', [Validators.required, Validators.minLength(4)] ],
      lName: ['', [Validators.required, Validators.minLength(2)] ],
      username: ['', [Validators.required, Validators.minLength(5)] ],
      gender: ['',[Validators.required] ],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)] ],
      address: this.fb.group({
        street: [],
        city: [],
        state: [],
        zip: [] 
      })
    });
  }

  handleSubmit(){
    this.userService.addUser(this.uForm.value);
    this.router.navigate(['user/user']);
  }

  get fName(){
    return this.uForm.controls.fName;
  }

  get lName(){
    return this.uForm.controls.lName;
  }

  get username(){
    return this.uForm.controls.username;
  }

  get password(){
    return this.uForm.controls.password;
  }

}
