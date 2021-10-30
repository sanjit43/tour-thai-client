import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import OrderPlace from './Components/OrderPlace/OrderPlace';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import AuthProvider from './ContextApi/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
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
            <PrivateRoute path='/placeOrder'>
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
