import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive(
    {
        selector : '[passwordValidator]',
        providers : [{
            provide : NG_VALIDATORS,
            useExisting : ConfirmPasswordValidator,
            multi:true
        }]
    }
)

export class ConfirmPasswordValidator implements Validator {

      @Input() passwordValidator!:string;
      validate(control : AbstractControl) : {[key:string]:any} | null
      {
         const comparepswd = control.parent?.get(this.passwordValidator);

         if(comparepswd?.value !=control.value)
         {
            return {'notequal':true};
         }

         return null;
      }
}