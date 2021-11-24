export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, propertyName: string, validatorValue?: any) {
        let config: any = {
            required: `${propertyName} requerido!`,
            mailInvalido: 'El formato de mail es incorrecto',
            passwordInvalida: 'El formato de la contraseña no es correcto debe tener: 1 minuscula, 1 mayuscula, 1 número y 1 caracter especial',
            textoInvalido: 'Solo se admiten letras en este campo',
            minlength: `la longitud debe ser de ${validatorValue.requiredLength} caracteres`
        }

        return config[validatorName];
    }

    static emailValidator(control: any) {
        if (
            control.value.match(
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            )
        ) {
            return null;
        } else {
            return { mailInvalido: true };
        }
    }

    static passValidator(control: any) {
        if (control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/))
            return null
        else
            return { passwordInvalida: true }
    }

    static textValidator(control: any) {
        if (control.value.match(/^[a-zA-Z\s]+$/))
            return null
        else
            return { textoInvalido: true }
    }

}