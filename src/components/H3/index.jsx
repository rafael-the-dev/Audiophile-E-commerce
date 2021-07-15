import './styles.css';

const H3 = ({ text, customClass, children }) => {
    return <h3 className={`h2 ${ customClass }`}>{ text }{ children }</h3>;
};

export default H3;