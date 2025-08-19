import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiBell, FiPlus, FiMenu } from "react-icons/fi";
import avatar from "../assets/images/avatar.png";

const Header = () => {
  return (
    <div className="w-full bg-blue-50 shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* logo */}
        <div className="flex items-center">
          <div className="font-bold text-xl">
            <span className="text-cyan-300 ml-11">Health</span>
            care.
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden relative md:flex justify-center">
          <FiSearch className="absolute left-1 top-2" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="min-w-sm h-9 border-2 border-gray-400 text-sm md:text-base font-semibold rounded-lg pl-6 outline-none"
          />
          <FiBell className="absolute right-1 top-2" size={16} />
        </div>

        {/* profile */}
        <UserActions>
          <UserProfile>
            <ProfileImage src={avatar} alt="User" />
            <ProfileName>Om Shinde</ProfileName>
          </UserProfile>
          <AddButton>
            <FiPlus />
          </AddButton>
        </UserActions>
        
      </div>
    </div>
  );
};

// `;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.75rem;
    margin-left: auto;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

const ProfileName = styled.span`
  font-weight: 500;

  @media (max-width: 480px) {
    display: none;
  }
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 767px) {
    padding: 0.5rem;
    min-width: 30px;
    min-height: 30px;
  }
`;

export default Header;
