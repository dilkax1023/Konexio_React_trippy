import React, { useState, useEffect } from 'react';
import Hotels from '../components/hotel/Hotels';
import Map from '../components/map/Map';
import Pagination from '../components/hotel/Pagination';
import Config from '../Config';
import qs from 'qs';

const HotelsContainer = (props) => {
	const [hotels, setHotels] = useState([]);
	const [hotelsPerPage] = useState(10);
	const [currPage, setCurrPage] = useState(1);
	const [currCity, setCurrCity] = useState('paris');
	const [totalResults, setTotalResults] = useState(10);

	const fetchHotels = async () => {
		console.log(currCity);
		const url = `${Config.host}/api/hotels/city/${currCity}`;
		const res = await fetch(url);
		const data = await res.json();
		// set state
		setTotalResults(data.total);
		setHotels(data.results);
	};

	//change pages
	const paginate = async (pageNumber) => {
		// console.log(pageNumber);

		setCurrPage(pageNumber);
		console.log(currCity, pageNumber);
		const url = `${Config.host}/api/hotels/city/${currCity}?page=${pageNumber}`;
		const res = await fetch(url);
		const data = await res.json();
		// set state
		setTotalResults(data.total);
		setHotels(data.results);
	};

	useEffect(() => {
		let { city } = qs.parse(props.location.search.replace('?', ''));

		if (city === undefined) city = 'paris';
		// fetch data
		console.log(city);
		setCurrCity(city);
		fetchHotels();
	}, [props.location.search, currCity]);

	return (
		<div className='row mb-5'>
			<Hotels hotels={hotels} />
			<Map className='mt-5' />
			<Pagination
				paginate={paginate}
				totalHotels={totalResults}
				hotelsPerPage={hotelsPerPage}
				city={currCity}
			/>
		</div>
	);
};

export default HotelsContainer;

// const lastIndexOfHotels = currPage * hotelsPerPage;
// const firstIndexOfHotels = lastIndexOfHotels - hotelsPerPage;
// const currHotels = hotels.slice(firstIndexOfHotels, lastIndexOfHotels);
