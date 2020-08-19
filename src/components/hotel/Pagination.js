import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalHotels, hotelsPerPage, paginate, city }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalHotels / hotelsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className='page-item'>
						<Link
							className='page-link'
							to={`/hotels/city/${city}?page=${pageNumber}`}
							onClick={() => paginate(pageNumber)}>
							{pageNumber}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
