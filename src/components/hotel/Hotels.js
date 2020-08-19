import React from 'react';
import Card from './Card';
import Pagination from './Pagination';
import Config from '../../Config';

const Hotels = ({ hotels, hotelsPerPage, loading, totalHotels }) => {
	if (loading) {
		return <h2>Loading</h2>;
	}

	const hotelList = hotels.map((hotel) => {
		return (
			<Card
				key={hotel._id}
				src={`${Config.host}${hotel.pictures[1]}`}
				name={hotel.name}
				price={hotel.price}
				stars={hotel.stars}
			/>
		);
	});
	return (
		<div className='col-lg-6'>
			<div className='row'>{hotelList}</div>
			<Pagination totalHotels={totalHotels} hotelsPerPage={hotelsPerPage} />
		</div>
	);
};

export default Hotels;
