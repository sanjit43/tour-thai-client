import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import OrderPlace from './Components/OrderPlace/OrderPlace';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers></Headers>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route path='/services/:id'>
            <Details></Details>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route exact path='/service/order'>
            <OrderPlace></OrderPlace>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
