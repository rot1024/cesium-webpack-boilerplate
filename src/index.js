import "./style.css";

Cesium.buildModuleUrl.setBaseUrl("./cesium/");

// eslint-disable-next-line no-unused-vars
const viewer = new Cesium.Viewer(document.getElementById("cesium"));

if (module.hot) {
  module.hot.accept();
}
