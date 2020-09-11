import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('NewPassword');
        let confirmPassword = control.get('ConfirmPassword');

        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };
        
        return null;
    }
}