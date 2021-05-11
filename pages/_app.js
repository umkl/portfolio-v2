//style files
import "./foyer.scss";

import "./error.scss";

import "./content/content.scss";
import "./content/Blog/Blog.scss";

import "./projects/projects.scss";

import "./contact/contact.scss";

import "./../components/about/about.scss";
import "./../components/bar/bar.scss";
import "./../components/btn/btn.scss";
import "./../components/nav/nav.scss";
import "./../components/Container/container.scss";
import "./../components/about/about.scss";
import "./../components/project/project.scss";

import "./Login/login.scss";

import "./global.scss";
import "./variables.scss";

//provider
import { BlurProvider } from "../context/BlurContext.js";
import { SearchProvider } from "../context/SearchContext.js";

import Head from "next/head"
import UgBar from "./../components/bar/bar.jsx";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="ungarlogo" href="/assets/Ungar_Website_Icon.ico"/>
      </Head>
      <SearchProvider>
        <BlurProvider>
          <UgBar />
          <Component {...pageProps} />
        </BlurProvider>
      </SearchProvider>
    </>
  );
}
