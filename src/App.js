import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import HotelsContainer from './containers/HotelsContainer';
import HotelContainer from './containers/HotelContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import Navigation from './components/navigation/index';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
	return (
		<Router>
			<div>
				<div className='header'>
					<Navigation />
					{/* <Jumbotron /> */}
				</div>
				<div className='container'>
					<Switch>
						<Route exact path='/' component={HomeContainer} />
						<Route exact path='/hotels' component={HotelsContainer} />
						<Route path='/restaurants' component={RestaurantsContainer} />
						<Route path='/hotels/:id' component={HotelContainer} />
						<Route path='/login' component={LoginContainer} />
						<Route path='/signup' component={SignupContainer} />
						<Route path='/*' component={NotFoundContainer} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
