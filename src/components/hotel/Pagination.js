import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalHotels, hotelsPerPage }) => {
	let pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalHotels / hotelsPerPage); i++) {
		pageNumbers.push(i);
	}
	console.log(pageNumbers);

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className='page-item'>
						<Link className='page-link' to='/hotels'>
							{pageNumber}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
