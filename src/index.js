import "./bootstrap";
import "./style.css";

import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

const viewer = new Viewer(document.getElementById("cesium"));

if (module && module.hot) {
  module.hot.accept();
}
