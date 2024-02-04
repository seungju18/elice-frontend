import { styled } from "styled-components";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <AppDiv className="App">
      <MainDiv>
        <MainPage />
      </MainDiv>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
`;

const MainDiv = styled.div`
  margin: auto;
  width: 100%;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
