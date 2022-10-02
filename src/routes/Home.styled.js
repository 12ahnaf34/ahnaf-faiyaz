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

  @FontFace{
    fontFamily:"Bahnschrift";
    src: local("Bahnschrift"), url("../fonts/bahnschrift.ttf") format("truetype")
  
    fontFamily:"Norwester";
    src: local("Norwester"), url("../fonts/norwester.otf") format("opentype")
  }
`;

export const ScrollbarWrapper = styled.div`
  ::-webkit-scrollbar {
    display: "none";
  }
`;
