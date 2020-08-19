import React from 'react';

const Card = ({ id, name, price, src, stars }) => {
	const style = {
		width: '100%',
		height: '73%',
		objectFit: 'fill',
		display: 'block',
	};

	const cardStyle = {
		height: '320px',
		minWidth: '200px',
	};

	return (
		<div className='col-md-6 p-2'>
			<div style={cardStyle} className='card'>
				<img style={style} src={src} alt={name} />
				<div className='card-body'>
					<p className='card-title'>{name}</p>
					<span>{price}$</span>
					<span>{stars}</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
