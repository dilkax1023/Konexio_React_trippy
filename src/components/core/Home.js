import React from 'react';
import Card from '../city/Card';

const Home = ({ cities }) => {
	if (cities === null || cities.length === 0) return <h1>City is not found</h1>;
	let citiesList = cities.map((city, i) => {
		if (cities.length > 0) {
			const { name, slug, source } = city;
			return (
				<React.Fragment>
					<Card key={i} name={name} slug={slug} source={source} />
				</React.Fragment>
			);
		} else {
			return (citiesList = []);
		}
	});
	return <React.Fragment>{citiesList}</React.Fragment>;
};

export default Home;
