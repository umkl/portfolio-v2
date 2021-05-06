//style files
import "./foyer.scss";

import "./error/error.scss";

import "./content/content.scss";
import "./content/Blog/Blog.scss";

import "./projects/projects.scss"

import "./contact/contact.scss";

import "./../components/about/about.scss";
import "./../components/bar/bar.scss";
import "./../components/btn/btn.scss";
import "./../components/nav/nav.scss";
import "./../components/Container/container.scss";
import "./../components/about/about.scss";
import "./../components/project/project.scss";

import "./Login/login.scss"

import "./global.scss";
import "./variables.scss";


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
