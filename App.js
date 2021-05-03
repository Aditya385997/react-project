// import logo from './logo.svg';
import React from 'react'
import './App.css';
import BasicDetail from './Components/BasicDetail'
import AddressDetail from './Components/AddressDetail'
import PaymentDetail from './Components/PaymentDetail';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import StoreDetail from './Components/StoreDetail';
import ShowDetail from './Components/ShowDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/showdetail" component={ShowDetail}/>
        <Route path="/payment" component={PaymentDetail}/>
        <Route path="/address" component={AddressDetail}/>
        <Route path="/" component={BasicDetail}/>
      </Switch>
    </Router>
 );
}

export default App;
