import InputValidator from '../../js/models/InputValidator';
import './styles.css';

const TextField = ({ type, setValue, placeholder, pattern, required, setIsValidInput }) => {
    const inputValidator = new InputValidator(pattern, setIsValidInput);
    const onBlurHandler = event => {
        setValue(v => event.target.value);
        inputValidator.validate(event.target.value);
    };

    return (
        <input 
            type={type}
            className={`default-input outline-none radius-default  w-100`}  
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            onBlur={onBlurHandler}
        />
    );
};

export default TextField;