import React, { useState } from "react";
import GlobalStyles, { Container } from "../GlobalStyles";

import Landing from "../components/Landing/Landing";
import Header from "../components/Header/Header";
//CSS

export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Landing />
    </div>
  );
}
