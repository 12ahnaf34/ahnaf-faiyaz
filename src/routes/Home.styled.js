import styled from "styled-components";

export const MainContainer = styled.div`
  display: "grid";
  width: "100%";
  margin-top: 5px;
  gap: 100px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const ScrollbarWrapper = styled.div`
  ::-webkit-scrollbar {
    display: "none";
  }
`;
