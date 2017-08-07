import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

import "./bootstrap";
import "./style.css";

// eslint-disable-next-line no-unused-vars
const viewer = new Viewer(document.getElementById("cesium"));

if (module.hot) {
  module.hot.accept();
}
