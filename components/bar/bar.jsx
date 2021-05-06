import React, { useEffect, useState, useContext } from "react";
import { useSpring, animated as a } from "react-spring";
import UgNav from "./../nav/nav.jsx";
import UgBtn from "./../btn/btn.jsx";
import Link from 'next/link'

import { BlurContext } from "./../../context/BlurContext.js";
import { useRouter } from 'next/router'

function UgBar() {
  const [loaded, setLoaded] = useState(false);
  const [pathParts, setPathParts] = useState(0);
  const [blur, setBlur] = useContext(BlurContext);

  var router = useRouter();

  const barFade = useSpring({
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -500,
  });

  const evaluateAndSetPath = () => {
    setPathParts(() => {
      return router.pathname.split("/").length - 1;
    });
  };
  
  useEffect(() => {
    setLoaded(true);
    evaluateAndSetPath();
  }, []);

  useEffect(() => {
    evaluateAndSetPath();
  }, [router.pathname]);

  return (
    <div style={blur != null ? { filter: `blur(${blur})` } : null}>
      {router.pathname == "/login" || !(pathParts == 1) ? (
        <div></div>
        ) : (
          <a.div id="ug-bar" style={barFade}>
            <UgBtn />
            <UgNav />
          </a.div>
        )}
    </div>
  );
}

export default UgBar;
