import React from 'react';
import './Secretary.css';

class Secretary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'https://via.placeholder.com/150',
      }
    };
  }

  render() {
    const { name, age, email, bio, avatar } = this.state.user;

    return (
      <div className="profile">
        <img className="avatar" src={avatar} alt="User Avatar" />
        <div className="details">
          <h2>{name}</h2>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
        </div>
      </div>
    );
  }
}

export default Secretary;
