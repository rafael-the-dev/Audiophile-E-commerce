import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from '@loadable/component';
import Header from "../../components/Header";
import Home from '../Home';
import Product from "../Product";

const App = () => {
    const loadableCategoriesComponent = loadable(() => import('../Categories'));

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:category" component={loadableCategoriesComponent} />
                    <Route exact path="/:category/:id" component={Product} />
                </Switch>
            </Router>
        </>
    );
};

export default App;