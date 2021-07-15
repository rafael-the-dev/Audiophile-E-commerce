import './styles.css';
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';

const Logo = ({ url, customClass }) => {
    return (
        <Link
            to={url ? url : '/'}
            aria-label="Go to home"
            className={`logo-container ${customClass}`}>
            <img src={logo} alt="Audiophile logo" className="block height-100 width-100 logo" />
        </Link>
    );
};

export default Logo;