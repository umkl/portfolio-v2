import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated as a, config } from "react-spring";

// import useOnScreen from "../../utils/useOnScreen.jsx"
import VisibilitySensor from "react-visibility-sensor";

const UgAboutCard = (props) => {
  const ref = useRef();
  // const isVisible = useOnScreen(ref)
  // const isVisible = true;

  const [isVisible, setVisible] = useState(false);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.3)",
    config: { duration: 400 },
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
      <a.div style={springProps} ref={ref}>
        <div className="ug-foyer-about">
          <div className="about-heading-box">
            <div className="ug-foyer-about-subheading">
              <span>{props.subheading}</span>
            </div>
            <div className="ug-foyer-about-heading">
              <span>{props.heading}</span>
            </div>
          </div>
          {/* <div className="ug-foyer-about-divider"></div> */}
          <div className="ug-foyer-about-description">
            <p>{props.description}</p>
          </div>
        </div>
      </a.div>
    </VisibilitySensor>
  );
};

export default UgAboutCard; 
