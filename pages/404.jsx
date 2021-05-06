import React, { useState, useEffect } from "react";
import { animated as a, useSpring } from "react-spring";
import Link from "next/link";
import Head from "next/head";

export default function f() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const springProps = useSpring({
    marginTop: loaded ? "0px" : "400px",
    opacity: loaded ? 1 : 0,
  });

  return (
    <>
      <Head>
        <title>Ungar error</title>
      </Head>

      <div className="ug-error">
        <a.div style={springProps} className="box">
          <p className="line-1">This page was not found.</p>
          <div className="line-2">
            return to
            <span className="line-2-border_button">
              <Link href="/">
                <a className="a-foyer-button">foyer</a>
              </Link>
            </span>
          </div>
        </a.div>
      </div>
    </>
  );
}

// export default CustomError;
