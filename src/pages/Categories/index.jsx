import CategoriesPanel from "../../components/CategoriesPanel";
import BestGear from "../../components/BestGear";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductsList";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from '../../data.json';
import Cart from "../../components/Cart";

const Categories = () => {
    const { category } = useParams();
    const history = useHistory();
    const [ productsList, setProductsList ] = useState([]);

    useEffect(() => {
        if(!['headphones', 'speakers', 'earphones'].includes(category)) {
            history.push('/');
        }

        setProductsList(p => data.filter(item => item.category === category));

        console.log()
    }, [ category, history ]);

    return (
        <>
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
        </>
    );
 };

 export default Categories;