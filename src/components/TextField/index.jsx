import './styles.css';

const TextField = ({ type, value, inputRef, placeholder }) => {
    return (
        <input 
            type={type}
            value={value}
            className={`default-input outline-none radius-default  w-100`}  
            placeholder={placeholder}
        />
    );
};

export default TextField;