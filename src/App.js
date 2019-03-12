import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './components/ProductList';
import Details from './components/Details';
import { Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Cart from './components/Cart';
import Default from './components/Default';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
				<Modal />
			</React.Fragment>
		);
	}
}

export default App;
