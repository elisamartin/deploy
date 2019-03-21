import React, { Component } from 'react';
import UserCard from './UserCard';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	render() {
		return (
			<div className="users">
				<h1>List of users </h1>
				<ul>
					{this.props.users.map((user) => {
						return <UserCard name={user.name} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Users;
