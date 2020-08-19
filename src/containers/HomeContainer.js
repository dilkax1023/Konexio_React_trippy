import React, { useEffect, useState } from 'react';
import Api from '../outils/Api';
// import Home from '../components/core/Home';
import Gallery from '../components/city/Gallery';

const HomeContainer = () => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		Api.getHome().then((data) => setCities(data));
	}, []);

	console.log(cities);

	return (
		<div className='container'>
			{/* <Home cities={cities} /> */}
			<Gallery cities={cities} />
		</div>
	);
};

export default HomeContainer;
