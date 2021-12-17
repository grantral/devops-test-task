import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import Main from './components/Main';
import Catalog from './components/Catalog';
import Product from './components/Product';
import About from './components/About';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul style={{listStyle: 'none', display: 'block', textAlign: 'left'}}>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <ul>
            <li><Link to="/product/1">Product 1</Link></li>
            <li><Link to="/product/2">Product 2</Link></li>
            <li><Link to="/product/3">Product 3</Link></li>
            <li><Link to="/product/4">Product 4</Link></li>
          </ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/catalog" exact component={Catalog} />
            <Route path="/product/:id" exact component={Product} />
            <Route path="/about" exact component={About} />
            <Route path="/404" exact component={NotFound} />

            <Redirect to="/404" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
