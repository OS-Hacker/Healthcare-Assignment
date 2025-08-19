import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-screen w-full">
        <Header />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <div className="flex-1 overflow-y-auto scroll-smooth">
            <Dashboard />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
