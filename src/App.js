import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productpage from './pages/Productpage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/products"  component={Productpage}/>
          <Route path="/productlistpage"  component={ProductListPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;