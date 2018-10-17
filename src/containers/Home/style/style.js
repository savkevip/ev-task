import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
`;

export const AddBtn = styled(Link)`
  margin: 20px 0; 
`;
