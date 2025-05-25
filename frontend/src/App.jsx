import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { GlobalStyles } from "./styles/global";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header toggleSidebar={toggleSidebar} />
        <MainContent>
          <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
          <DashboardContent>
            <Dashboard />
          </DashboardContent>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  min-height: 0; 
`;

const DashboardContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;
