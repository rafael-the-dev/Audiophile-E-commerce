import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../../components/Header";
import Home from '../Home';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route component={Home}/>
                </Switch>
            </Router>
        </>
    );
};

export default App;