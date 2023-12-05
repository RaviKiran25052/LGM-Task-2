// UserCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  width: 450px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const UserDetails = styled.div`
  flex-grow: 1;
  text-align: start;
  font-size: 20px;
`;

const UserId = styled.p`
  color: #fff;
`;

const Email = styled.p`
  margin-bottom: 5px;
  color: #fff;
`;

const UserName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <UserDetails>
        <UserName>{user.first_name} {user.last_name}</UserName>
        <UserId>ID: {user.id}</UserId>
        <Email>Email: {user.email}</Email>
      </UserDetails>
    </Card>
  );
};

export default UserCard;
