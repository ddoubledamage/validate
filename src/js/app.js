export class Validator {
    static validateUsername(username){
        const pattern = /^(?!.*\d{4,})(?!^[0-9_-])(?!.*[0-9-_]$)[a-zA-Z0-9_-]/;
        return pattern.test(username);
    }
}

const validator = new Validator();