import { Link } from 'react-router-dom';
import './styles.css';

const SeeProductLink = ({ url, customClass }) => {
    return (
        <Link
            to={url} 
            className={`uppercase text-white decoration-none font-weight-6 link see-product-link ${customClass}`}>
            See product
        </Link>
    );
};

export default SeeProductLink;