import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';
import './Nav.module.css';

const Navigation = () => {
	const style = {
		boxShadow: 'none',
		color: Global.color.body,
		padding: '11px 13px',
	};

	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			if (window.scrollY > 0) {
				setScroll(true);
				return;
			} else {
				setScroll(false);
			}
			return () => {
				window.removeEventListener('scroll');
			};
		});
	});

	return (
		<nav
			className={`navbar navbar-expand-lg navbar-light ${
				scroll ? 'bg-success' : 'bg-secondary'
			} px-5 fixed-top`}>
			<NavLink exact className='navbar-brand text-light' to='/'>
				TRIPPY
			</NavLink>
			<button
				className='navbar-toggler custom'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav ml-auto'>
					{/* <li className='nav-item'>
						<NavLink
							style={style}
							activeClassName='btn btn-outline-light'
							exact
							className='nav-link'
							to='/'>
							HOME <span className='sr-only'>(current)</span>
						</NavLink>
					</li> */}
					<li className='nav-item'>
						<NavLink
							style={style}
							activeClassName='btn btn-outline-light'
							exact
							className='nav-link'
							to='/'>
							HOTELS <span className='sr-only'>(current)</span>
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							style={style}
							activeClassName='btn btn-outline-light'
							className='nav-link'
							to='/restaurants'>
							RESTAURANTS
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							style={style}
							activeClassName='btn btn-outline-light'
							className='nav-link'
							to='/login'>
							LOG IN
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							style={style}
							activeClassName='btn btn-outline-light'
							className='nav-link'
							to='/signup'
							aria-disabled='true'>
							SIGN UP
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
