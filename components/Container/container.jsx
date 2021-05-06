import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { useRouter } from "next/router";

import VisibilitySensor from "react-visibility-sensor";

const Container = (props) => {
  const ref = useRef();

  // const isVisible = useOnScreen(ref);
  const [isVisible, setVisible] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [hoverStatus, setHoverStatus] = useState(false);
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? "10px" : "-500px",
  });
  const router = useRouter();

  // const onClick = useCallback((e) => {
  //   e.preventDefault();
  //   const to = `/content/${props.Route}`;
  //   router.push(to);
  // }, [props.Route, router]);

  const onClick = (e) => {
    e.preventDefault();
    const to = `/content/${props.Route}`;
    router.push(to);
  };

  const backgroundSpring = useSpring({
    backgroundColor: !hoverStatus ? "#FFFFFF" : "#000000",
  });

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVis) => {
        if (isVis && isVisible != true) {
          setVisible(true);
        }
      }}
    >
      <a.div
        ref={ref}
        href={props.Route}
        style={springProps}
        className="ug-container"
        onClick={onClick}
        onMouseEnter={() => setHoverStatus(true)}
        onMouseLeave={() => setHoverStatus(false)}
      >
        {/* <Link className="ug-container-link" to={`/content/${props.heading}`}> */}
        <div className="ug-container-heading">{props.Name}</div>
        <div className="ug-container-small_description">
          {props.Description}
        </div>
        {/* </Link> */}
      </a.div>
    </VisibilitySensor>
  );
};

export default Container;
