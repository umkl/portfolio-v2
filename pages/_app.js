//style files
import "./foyer.scss";

import "./Content/content.scss";
import "./Content/Blog/Blog.scss";

import "./../components/about/about.scss";
import "./../components/bar/bar.scss";
import "./../components/btn/btn.scss";
import "./../components/nav/nav.scss";
import "./../components/Container/container.scss";
import "./../components/about/about.scss";

import "./global.scss";


//provider
import { BlurProvider } from "../context/BlurContext.js";
import {SearchProvider} from "../context/SearchContext.js";

import UgBar from "./../components/bar/bar.jsx";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <BlurProvider>
          <UgBar />
          <Component {...pageProps} />
        </BlurProvider>
      </SearchProvider>
    </>
  );
}
