import React from 'react';
import Card from './Card';
import Config from '../../Config';

const Hotels = ({ hotels }) => {
	const hotelList = hotels.map((hotel) => {
		return (
			<Card
				key={hotel._id}
				src={`${Config.host}${hotel.pictures[0]}`}
				name={hotel.name}
				price={hotel.price}
				stars={hotel.stars}
			/>
		);
	});
	return (
		<div className='col-lg-6'>
			<div className='row'>{hotelList}</div>
		</div>
	);
};

export default Hotels;
