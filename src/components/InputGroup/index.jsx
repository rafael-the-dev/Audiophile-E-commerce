import './styles.css';

const InputGroup = ({ children, customClass }) => {
    return (
        <div className={`align-start flex flex-column w-100 input-group ${customClass}`}>
            {children}
        </div>
    );
};

export default InputGroup;