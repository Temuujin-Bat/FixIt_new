// Components
import { InitRoutes } from "./router";
import ThemeConfig from "./theme";
import "simplebar-react/dist/simplebar.min.css";
// eslint-disable-next-line import/no-unresolved
import "yet-another-react-lightbox/styles.css";
// eslint-disable-next-line import/no-unresolved
import "yet-another-react-lightbox/plugins/captions.css";
// eslint-disable-next-line import/no-unresolved
import "yet-another-react-lightbox/plugins/thumbnails.css";

/* lazy image */
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  return (
    <ThemeConfig>
      <InitRoutes />
    </ThemeConfig>
  );
}

export default App;
