import styled from "styled-components";
import "../fonts/bahnschrift.ttf";
import "../fonts/norwester.otf";

export const MainContainer = styled.div`
  display: "grid";
  width: "100%";
  margin-top: 5px;
  gap: 100px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  @font-face {
    font-family: "Bahnschrift";
    src: local("Bahnschrift"), url("../fonts/bahnschrift.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "Norwester";
    src: local("Norwester"), url("../fonts/norwester.otf") format("opentype");
    font-style: normal;
    font-weight: normal;
  }
`;

export const ScrollbarWrapper = styled.div`
  ::-webkit-scrollbar {
    display: "none";
  }
`;
