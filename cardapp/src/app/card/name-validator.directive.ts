import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms/src/directives/validators';

@Directive({
  selector: '[nameValidator] [ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}]
})
export class NameValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    //console.log(control.value);
    const value = control.value;
    if(value != null && value.trim().length > 2 ){
      return null;
    }else{
      return {"nameInvalid" : true};
    }
    
  }

}
