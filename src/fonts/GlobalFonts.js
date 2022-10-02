import { createGlobalStyle } from "styled-components";

import Bahnschrift from "./Bahnschrift.ttf";
import Norwester from "./Norwester.woff2";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Bahnschrift';
        src: url(${Bahnschrift}) format('truetype');
    }

    @font-face {
      font-family: 'Norwester';
      src: url(${Norwester}) format('woff2');
  }
`;

export default GlobalFonts;
