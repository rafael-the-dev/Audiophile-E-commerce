import './styles.css';

const H2 = ({ text, customClass, children }) => {
    return <h2 className={`h2 ${ customClass }`}>{ text }{ children }</h2>;
};

export default H2;