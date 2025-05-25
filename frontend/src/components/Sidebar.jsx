import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/navItems";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMobileOpen(false);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    if (!isMobileOpen || !isMobileView) return;

    const handleOutsideClick = (e) => {
      const sidebar = document.getElementById("sidebar-container");
      const menuButton = document.getElementById("mobile-menu-btn");

      if (!sidebar?.contains(e.target) && !menuButton?.contains(e.target)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileOpen, isMobileView]);

  return (
    <>
      {isMobileView && (
        <MobileMenuButton
          id="mobile-menu-btn"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
      )}

      <SidebarOverlay
        $isMobileOpen={isMobileOpen && isMobileView}
        onClick={() => setIsMobileOpen(false)}
      />

      <SidebarContainer
        id="sidebar-container"
        $isMobileOpen={isMobileOpen}
        $isMobileView={isMobileView}
      >
        <SidebarTitle>General</SidebarTitle>
        <NavMenu>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              onClick={() => {
                if (isMobileView) setIsMobileOpen(false);
              }}
            >
              <item.icon aria-hidden="true" />
              <span>{item.label}</span>
            </NavItem>
          ))}
        </NavMenu>
      </SidebarContainer>
    </>
  );
};

// Styled Components
const MobileMenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ $isMobileOpen }) => ($isMobileOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${({ $isMobileOpen }) => ($isMobileOpen ? "auto" : "none")};
  display: ${({ $isMobileOpen }) => ($isMobileOpen ? "block" : "none")};

  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarContainer = styled.nav`
  width: 250px;
  background-color: #f6faff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: ${({ $isMobileView }) => ($isMobileView ? "fixed" : "sticky")};
  z-index: 1000;
  top: 0;
  left: 0;
  height: ${({ $isMobileView }) =>
    $isMobileView ? "100vh" : "calc(100vh - 70px)"};
  overflow-y: auto;
  transition: transform 0.3s ease;

  /* Mobile: Hide/show sidebar with transform */
  transform: ${({ $isMobileView, $isMobileOpen }) =>
    $isMobileView
      ? $isMobileOpen
        ? "translateX(0)"
        : "translateX(-100%)"
      : "translateX(0)"};

  /* Desktop: Reset transform & adjust sticky behavior */
  @media (min-width: 769px) {
    position: sticky;
    transform: translateX(0);
  }
`;


const SidebarTitle = styled.h3`
  color: #6b7280;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #4b5563;

  svg {
    color: #6b7280;
    min-width: 20px;
  }

  span {
    white-space: nowrap;
    font-size: 0.9375rem;
  }

  &:hover {
    background-color: #e5efff;
    color: #1e40af;

    svg {
      color: #1e40af;
    }
  }

  @media (max-width: 768px) {
    padding: 0.85rem 1rem;
  }
`;

export default Sidebar;
