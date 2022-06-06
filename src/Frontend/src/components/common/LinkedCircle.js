import React, { useEffect, useState } from 'react';

const LinkedCircle = props => {
	const {direction} = props;

	const [_direction, setDirection] = useState('right');

	useEffect(() => {
		setDirection(direction);
	});

	return(<div className={`linked-line-${_direction}-layout flex items-center`}>
	{
		_direction == 'right' ? 
			<>
				<div className="link-line-rightside-layout">
					------------------
				</div>
				<div className={`linked-circle-${_direction}side-layout w-6 h-6 rounded-full`}>
				</div>
			</>:
			<>
				<div className={`linked-circle-${_direction}side-layout w-6 h-6 rounded-full`}>
				</div>
				<div className="link-line-rightside-layout">
					------------------
				</div>
			</>
	}
	</div>);
}

export default LinkedCircle;