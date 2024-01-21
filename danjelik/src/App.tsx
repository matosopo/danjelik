import React, { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Photos from "./components/Photos";
import Prices from "./components/Prices";
import IconLabelTabs from "./components/Tabs";

const App: React.FC = () => {
  const [section, setSection] = useState("home");

  const renderSection = () => {
    switch (section) {
      case "contact":
        return <Contact />;
      case "photos":
        return <Photos />;
      case "prices":
        return <Prices />;
      case "mui":
        return <IconLabelTabs />;

      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setSection("home")}>Home</button>
        <button onClick={() => setSection("contact")}>Contact</button>
        <button onClick={() => setSection("photos")}>Photos</button>
        <button onClick={() => setSection("prices")}>Prices</button>
        <button onClick={() => setSection("mui")}>mui</button>
      </nav>
      {renderSection()}
    </div>
  );
};

export default App;
