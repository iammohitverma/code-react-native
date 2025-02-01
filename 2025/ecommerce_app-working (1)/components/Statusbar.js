import { useState } from "react";
import { StatusBar } from "react-native";

function Statusbar({ barBackground, barColor }) {
  const [barBg, setBarBg] = useState(barBackground ? barBackground : "#ffffff");
  const [barColorBg, setBarColor] = useState("dark-content");

  return <StatusBar backgroundColor={barBg} barStyle={barColorBg} />;
}

export default Statusbar;
