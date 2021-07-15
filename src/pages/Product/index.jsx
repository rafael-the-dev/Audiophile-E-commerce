import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from '../../components/Cart';
import './styles.css';

const Product = () => {
    const { id } = useParams();
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        fetch('../../data.json')
            .then(res => res.json())
            .then(data => setProduct(p => data.filter(item => item.id === id)[0]))
    });

    return (
        <main>
            <section>
                <Cart product={product} showForm/>
            </section>
        </main>
    );
};

export default Product;