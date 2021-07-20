class InputValidator {
    constructor(pattern, setIsValidForm) {
        this._pattern = new RegExp(pattern);
        this._setIsValidForm = setIsValidForm;
    }

    validate(value) {
        if(this._pattern.test(value)) {
            this._setIsValidForm(b => false);
        } else {
            this._setIsValidForm(b => true);
        }
    }
}

export default InputValidator;