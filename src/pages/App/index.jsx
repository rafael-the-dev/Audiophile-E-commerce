import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from '@loadable/component';
import Header from "../../components/Header";
import Home from '../Home';
import Product from "../ProductRouter";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../../js/store/reducers";
import { Provider } from "react-redux";
import CartModal from "../../components/CartModal";
import { useRef } from "react";

const App = () => {
    const loadableCategoriesComponent = loadable(() => import('../Categories'));
    const store = configureStore({ reducer: cartReducer });

    const modalRef = useRef(null);

    return (
        <Provider store={store}>
            <Router>
                <Header modalRef={modalRef}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:category" component={loadableCategoriesComponent} />
                    <Route exact path="/:category/:id" component={Product} />
                </Switch>
                <CartModal modalRef={modalRef} />
            </Router>
        </Provider>
    );
};

export default App;