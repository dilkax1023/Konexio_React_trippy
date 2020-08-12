import React from 'react';
import style from 'styled-components';
import { Link } from 'react-router-dom';

const Container = style.div`
	 width: 100%;
	 height: 100%;
 `;

const Image = style.img`
	width: 100%;
	height:100%;
 `;

const Card = ({ name, source, slug, isLarge }) => {
	return (
		<Container className={isLarge ? 'col-md-6 col-12' : 'col-md-6  col-6'}>
			<Link to={`/hotels/${slug}`}>
				<div style={{ width: '100%', height: '100%' }}>
					<Image src={`http://localhost:3001${source}`} alt={name} />
					<p>{name}</p>
				</div>
			</Link>
		</Container>
	);
};

export default Card;
