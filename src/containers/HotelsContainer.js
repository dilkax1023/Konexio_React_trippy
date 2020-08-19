import React, { useState, useEffect } from 'react';
import Hotels from '../components/hotel/Hotels';
import Map from '../components/map/Map';
import qs from 'qs';

const HotelsContainer = (props) => {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(false);
	const [hotelsPerPage, setHotelsPerPage] = useState(4);
	const [currPage, setCurrPage] = useState(1);

	useEffect(() => {
		const { city } = qs.parse(props.location.search.replace('?', ''));
		const url = `http://localhost:3001/api/hotels/city/${city}`;
		const fetchHotels = (url) => {
			fetch(url)
				.then((response) => {
					// setLoading(true);
					console.log(response);
					if (response.ok) {
						response.json().then((data) => {
							// setLoading(false);
							setHotels(data.results);
						});
					} else {
						console.log('error');
					}
				})
				.catch(function (error) {
					console.log(
						"Il y a eu un problème avec l'opération fetch: " + error.message
					);
				});
		};

		fetchHotels(url);
	}, []);

	console.log('hotelscontainer', hotels);

	const lastIndexOfHotels = currPage * hotelsPerPage;
	const firstIndexOfHotels = lastIndexOfHotels - hotelsPerPage;
	const currHotels = hotels.slice(firstIndexOfHotels, lastIndexOfHotels);

	return (
		<div className='row mb-5'>
			<Hotels
				hotels={currHotels}
				loading={loading}
				hotelsPerPage={hotelsPerPage}
				totalHotels={hotels.length}
			/>

			<Map className='mt-5' />
		</div>
	);
};

export default HotelsContainer;
