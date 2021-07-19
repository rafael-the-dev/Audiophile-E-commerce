const Label = ({ label, inputRef, customClass }) => {
    return (
        <label htmlFor={inputRef} className={`${customClass}`}>
            { label }
        </label>
    );
};

export default Label;