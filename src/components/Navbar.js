import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Button from './Button';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md px-sm-5 bg-dark navbar-dark ">
				{/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

				<Link to="/">
					<img src={logo} alt="store" className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-items-center ">
					<li className="nav-item ml-5 ">
						<Link to="/" className="nav-link text-bright">
							Products
						</Link>
					</li>
				</ul>
				<Link to="/cart" className="nav-link ml-auto">
					<Button>
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>my cart
					</Button>
				</Link>
			</nav>
		);
	}
}
