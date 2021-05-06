import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {useSpring}  from "react-spring";
import Logo from "./../../assets/UNGAR_NEW_LOGO.jsx";

export default function UgNav() {
  const router = useRouter();
  const [varClicked, setClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  var cLocation = router.pathname;

  function changeClickedTo(num) {
    setClicked({
      1: num == 1 ? true : false,
      2: num == 2 ? true : false,
      3: num == 3 ? true : false,
      4: num == 4 ? true : false,
    });
  }

  useEffect(() => {
    if (location.pathname == "/") {
      changeClickedTo(1);
    } else if (location.pathname == "/content") {
      changeClickedTo(2);
    } else if (location.pathname == "/projects") {
      changeClickedTo(3);
    } else if (location.pathname == "/contact") {
      changeClickedTo(4);
    }
    return () => {};
  }, [cLocation]);

  const {colorVal} = useSpring({colorVal: "red"});


  if (cLocation == "/login") {
    return (
      <div className="ug-nav-link-single_container">
        <Link className="ug-nav-link" href="/">
          <a>
            <Logo height="120px" width="120px"/>
          </a>
        </Link>
      </div>
    );
  } else {
    return (
      <nav id="ug-nav-bar">
        <div className="ug-nav-element">
          <Link className="ug-nav-link" href="/">
            {/* <img className="ug-nav-link-icon" src={UngarLogoURL} width="50px" height="50px" stroke="red"/> */}
            <a>
              <Logo
                height="50px"
                width="50px"
                active={varClicked[1]}
                // stroke={colorVal}
                // className={
                //   varClicked[1]
                //     ? "ug-nav-link-logo-true"
                //     : "ug-nav-link-logo-false"
              />
            </a>
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link className="ug-nav-link" href="/content">
            <a>
              <span
                className={
                  varClicked[2]
                    ? "ug-nav-element-sub ug-nav-element-selected_true"
                    : "ug-nav-element-sub ug-nav-element-selected_false"
                }
              >
                content
              </span>
            </a>
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link className="ug-nav-link" href="/projects">
            <a>
              <span
                className={
                  varClicked[3]
                    ? "ug-nav-element-sub ug-nav-element-selected_true"
                    : "ug-nav-element-sub ug-nav-element-selected_false"
                }
              >
                projects
              </span>
            </a>
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link
            className="ug-nav-link"
            href="/contact"
            // onClick={() => changeClickedTo(3)}
          >
            <a>
              <span
                className={
                  varClicked[4]
                    ? "ug-nav-element-sub ug-nav-element-selected_true"
                    : "ug-nav-element-sub ug-nav-element-selected_false"
                }
              >
                contact
              </span>
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}
