import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productpage from './pages/Productpage';
import ProductListPage from './pages/ProductListPage';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/products"  component={Productpage}/>
          <Route path="/productlistpage"  component={ProductListPage}/>
          <Route path="/about"  component={About}/>
          <Route path="/team"  component={Team}/>
          <Route path="/contact" component={Contact} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;