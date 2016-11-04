import "./style.css";
import { Viewer } from "cesium";

const viewer = new Viewer("cesium");

if (module && module.hot) {
  module.hot.accept();
}
