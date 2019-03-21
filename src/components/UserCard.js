import React from 'react';

const UserCard = (props) => {
	const { name } = props;
	return (
		<div className="User">
			<h3>{name}</h3>
			<p>Posts soon</p>
		</div>
	);
};

export default UserCard;
