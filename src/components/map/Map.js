import React from 'react';
import photo from '../../Global.webp';

const Map = () => {
	const style = {
		width: '100%',
		height: '100%',
	};

	return (
		<div className='col-lg-6'>
			<img style={style} src={photo} alt='echantillong' />
		</div>
	);
};

export default Map;
