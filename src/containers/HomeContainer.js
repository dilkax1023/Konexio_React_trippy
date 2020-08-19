import React, { useEffect, useState } from 'react';
import Api from '../outils/Api';
import Gallery from '../components/city/Gallery';

const HomeContainer = () => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		Api.getHome().then((data) => setCities(data));
	}, []);
	return (
		<div className='container'>
			<Gallery cities={cities} />
		</div>
	);
};

export default HomeContainer;
