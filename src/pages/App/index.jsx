import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from '@loadable/component';
import Home from '../Home';
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../../js/store/reducers";
import { Provider } from "react-redux";

const App = () => {
    const loadableCategoriesComponent = loadable(() => import('../Categories'));
    const loadableProductComponent = loadable(() => import('../ProductRouter'));
    const loadableCheckoutComponent = loadable(() => import('../Checkout'));
    const store = configureStore({ reducer: cartReducer });

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/checkout" component={loadableCheckoutComponent} />
                    <Route exact path="/:category/:id" component={loadableProductComponent} />
                    <Route exact path="/:category" component={loadableCategoriesComponent} />
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;