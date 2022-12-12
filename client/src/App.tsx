import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from "./app/containers/HomePage";
import "./App.css";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

export const App: React.FC = () => {
  return (
    <div className="App">
      <AppContainer>
        <HomePage />
      </AppContainer>
    </div>
  );
};
