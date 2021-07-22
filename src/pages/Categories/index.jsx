import CategoriesPanel from "../../components/CategoriesPanel";
import BestGear from "../../components/BestGear";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductsList";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from '../../data.json';
import Cart from "../../components/Cart";
//import CurrentPage from '../../js/models/CurrentPage';
import { useRef } from 'react';
import Header from "../../components/Header";
import CartModal from "../../components/CartModal";

const Categories = () => {
    const { category } = useParams();
    const history = useHistory();
    const [ productsList, setProductsList ] = useState([]);
    const categoriesRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if(!['headphones', 'speakers', 'earphones'].includes(category)) {
            history.push('/');
        }

        setProductsList(p => data.filter(item => item.category === category));

        console.log()
    }, [ category, history ]);

    return (
        <>
            <Header modalRef={modalRef} currentPage={categoriesRef}/>
            <div ref={categoriesRef}>
                <CategoriesPanel text={ category } />
                <main>
                    <section className="px-5">
                        {
                            productsList.map(product => <Cart key={product.slug} product={product} />)
                        }
                    </section>
                    <ProductsList />
                    <BestGear />
                </main>
                <Footer/>
            </div>
            <CartModal modalRef={modalRef} /> 
        </>
    );
 };

 export default Categories;