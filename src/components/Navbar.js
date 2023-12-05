// Navbar.js
import React from 'react';
import styled from 'styled-components';
import BrandLogo from './logo.jpg';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const Logo = styled.img`
  margin-left: 100px;
  height: 50px;
`;

const GetUsersBtn = styled.button`
  padding: 10px 20px;
  margin-right: 100px;
  background-color: #4caf50;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357a38;
  }
`;

const Navbar = ({ getUsers }) => {
  return (
    <NavbarContainer>
      <Brand>
        <Logo src={BrandLogo} alt="Brand Logo" />
      </Brand>
      <GetUsersBtn onClick={getUsers}>Get Users</GetUsersBtn>
    </NavbarContainer>
  );
};

export default Navbar;
