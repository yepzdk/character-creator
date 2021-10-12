import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import BackgroundPerspective from "./components/BackgroundPerspective";

function App() {
  return (
    <>
      <BackgroundPerspective />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
