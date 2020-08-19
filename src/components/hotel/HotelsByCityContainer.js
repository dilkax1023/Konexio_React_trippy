// import React, { useState, useEffect } from 'react';
// import qs from 'qs';

// const HotelsByCityContainer = (props) => {
// 	const [pageNumber, setPageNumber] = useState(1);
// 	const [currCity, setCurrCity] = useState('');

// 	useEffect(() => {
// 		let qString = qs.parse(props.location.search);
// 		console.log('hotelsbyciy', qString);

// 		// if (city === undefined) city = 'paris';
// 		// fetch data
// 		// const fetchData = async () => {
// 		// 	fetch(`${Config.host}/api/hotels/city/${currCity}?page=${pageNumber}`)
// 		// 		.then((res) => res.json())
// 		// 		.then((data) => {
// 		// 			setHotels(data.results);
// 		// 		});
// 		// };

// 		// fetchData();
// 	}, []);

// 	return <div>HotelsByCityContainer</div>;
// };

// export default HotelsByCityContainer;
