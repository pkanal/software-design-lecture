import React from "react";
import { Deck } from "spectacle";
import "tachyons";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { introSlides } from "../slides/intro";
import { architectureSlides } from "../slides/architecture";
import { codePatternsSlides } from "../slides/code-patterns";
import { internalsSlides } from "../slides/internals";
import { outroSlides } from "../slides/outro";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#D7A6A3",
    secondary: "#344472",
    tertiary: "#FFFFFF",
    quartenary: "#D83343",
    quint: "#798DBA"
  },
  {
    primary: { name: "Montserrat", googleFont: true, styles: ["400", "700"] },
    secondary: { name: "Lato", googleFont: true, styles: ["400", "700"] }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        {introSlides}
        {architectureSlides}
        {codePatternsSlides}
        {internalsSlides}
        {outroSlides}
      </Deck>
    );
  }
}
