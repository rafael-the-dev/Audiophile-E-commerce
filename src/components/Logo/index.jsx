import './styles.css';
import logo from '../../assets/images/logo.svg'

const Logo = ({ url, customClass }) => {
    return (
        <a href={url} aria-label="Go to home" className={`logo-container ${customClass}`}>
            <img src={logo} alt="Audiophile logo" className="block height-100 width-100 logo" />
        </a>
    );
};

export default Logo;