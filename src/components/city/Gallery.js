import style from 'styled-components';
import React, { useState } from 'react';
import Global from '../../Global';
import Card from './Card';

const Container = style.div`
  color: ${Global.color.body},
  font-family: ${Global.font.primary}
`;

const Gallery = ({ cities }) => {
	const [isLarge, setIsLarge] = useState(false);

	if (cities === null || cities.length === 0) return <h1>City is not found</h1>;
	const renderCard = () => {
		let slicedCities = cities.slice(1);
		let card = slicedCities.map((city, i) => {
			return (
				<Card key={i} name={city.name} slug={city.slug} source={city.source} />
			);
		});
		return card;
	};

	const checkCardHandler = () => {
		let largeCard = isLarge;
		setIsLarge(!largeCard);
	};

	return (
		<Container className='row'>
			<div className='col-md-12'>
				<h1>Explorez le monde</h1>
				<div className='row'>
					<Card
						isLarge={checkCardHandler}
						name={cities[0].name}
						slug={cities[0].slug}
						source={cities[0].source}
					/>
					<div className='col-md-6 col-12'>
						<div className='row'>{renderCard()}</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Gallery;
