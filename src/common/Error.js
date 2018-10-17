import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

const Error = () => (
  <ErrorWrapper>
    <h1>Oh... something going wrong... please reload the page :)</h1>
  </ErrorWrapper>
);

export default Error;
