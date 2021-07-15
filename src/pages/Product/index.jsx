import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Cart from '../../components/Cart';
import H2 from '../../components/H2';
import ProductCard2 from '../../components/ProductCard2';
import data from '../../data.json';
import BestGear from '../../components/BestGear';
import Footer from '../../components/Footer';
import ProductsList from '../../components/ProductsList';

import './styles.css';
import ImageCart from '../../components/ImageCart';

const Product = () => {
    const { id } = useParams();
    const history = useHistory();
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        const result = data.filter(item => item.id === parseInt(id))
        if(result.length > 0) {
            setProduct(p => result[0]);
        }else {
            history.push('/');
        }
        
    }, [ id, history ]);

    return (
        <>
            <main>
                <section className="px-5">
                    { 
                        product.image && <Cart customClass="product-cart" product={product} showForm />
                    } 
                </section>
                <section className="w-100 px-5 px-lg flex flex-column justify-between
                    align-start-md flex-row-md">
                    <div className="features">
                        <H2 customClass="text-left uppercase features__title" text="features" />
                        { product && <p className="text-left features__description">{ product.features }</p>}
                    </div> 

                    <div className="px-5 w-100 product-component align-start flex flex-column justify-between
                        flex-row-sm flex-column-md">
                        <H2 customClass="text-left uppercase product-component__title" text="In the box" />
                        <ul className="align-start flex flex-column w-100 list">
                            {
                                product.includes && (
                                    product.includes.map((item, index) => {
                                    return (
                                        <li className="item" key={index}>
                                                <em className="item--highlight">{ item.quantity }x</em>
                                                { item.item }
                                        </li>
                                    );
                                    })
                                )
                            }
                        </ul>
                    </div>
                </section>

                <section className="gallery w-100 px-5 px-lg align-stretch flex flex-column ">
                    {
                        product.gallery && (
                            <>
                                <ImageCart
                                    galleryImage={product.gallery.first}
                                    customClass="gallery-image--first"
                                />
                                <ImageCart 
                                    galleryImage={product.gallery.second}
                                    customClass="gallery-image--second"
                                />
                                <ImageCart
                                    galleryImage={product.gallery.third}
                                    customClass="gallery-image--third"
                                />
                            </>
                        )
                    }
                </section>

                <section className="px-5 px-lg align-center flex flex-column justify-between others-products">
                    <H2 customClass="others-products__title uppercase" text="You may also like"/>
                    <div className="align-stretch flex flex-column justify-between w-100 others-products__content
                        flex-row-sm ">
                        {
                            product.others && (
                                product.others.map((item, index) => <ProductCard2 cart={item} />)
                            )
                        }
                    </div>
                </section>

                <ProductsList />
                <BestGear />
            </main>
            <Footer />
        </>
    );
};

export default Product;