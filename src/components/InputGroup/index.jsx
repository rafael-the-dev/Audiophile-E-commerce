import './styles.css';

const InputGroup = ({ children }) => {
    return (
        <div className="align-start flex flex-column w-100 input-group">
            {children}
        </div>
    );
};

export default InputGroup;