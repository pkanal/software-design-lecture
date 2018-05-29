import React from "react";
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { introSlides } from "../slides/intro";
import { architectureSlides } from "../slides/architecture";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#ffffff",
    secondary: "#D7A6A3",
    tertiary: "#344472",
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
      </Deck>
    );
  }
}
