import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiBell, FiPlus, FiMenu } from "react-icons/fi";
import avatar from "../assets/images/avatar.png";

const Header = ({ onMenuToggle }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <HeaderContainer>
      <LeftSection>
        <MobileMenuButton onClick={onMenuToggle}>
          <FiMenu size={24} />
        </MobileMenuButton>
        <Logo>
          <span style={{ color: "#36D6DB" }} className="LogoText">
            Health
          </span>
          care.
        </Logo>
      </LeftSection>

      <SearchBar $showMobile={showMobileSearch}>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <SearchInput type="text" placeholder="Search..." />
        <MobileSearchToggle
          onClick={() => setShowMobileSearch(!showMobileSearch)}
        >
          {showMobileSearch ? "Close" : <FiSearch />}
        </MobileSearchToggle>
        <NotificationIcon>
          <FiBell />
        </NotificationIcon>
      </SearchBar>

      <UserActions>
        <UserProfile>
          <ProfileImage src={avatar} alt="User" />
          <ProfileName>Om Shinde</ProfileName>
        </UserProfile>
        <AddButton>
          <FiPlus />
        </AddButton>
      </UserActions>
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
  left: 10px;
  position: relative;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.light};
  flex: 1;
  max-width: 500px;
  position: relative;

  @media (max-width: 767px) {
    display: ${({ $showMobile }) => ($showMobile ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 1rem;
    right: 1rem;
    z-index: 101;
    max-width: unset;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const SearchIcon = styled.div`
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  padding: 0.5rem 0;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 767px) {
    padding: 0.75rem 0;
  }
`;

const MobileSearchToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.75rem;
    margin-left: auto;
  }
`;

const NotificationIcon = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 767px) {
    padding: 0.25rem;
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
