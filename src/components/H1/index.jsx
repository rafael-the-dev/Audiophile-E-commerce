import './styles.css';

const H1 = ({ text, customClass, children }) => {
    return <h1 className={`h1 ${ customClass }`}>{ text}{children}</h1>;
};

export default H1;