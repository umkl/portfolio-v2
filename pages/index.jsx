//npm packages
import React, { useEffect, useState, useRef} from "react";
import { useSpring, useSprings, animated as a } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
import Head from "next/head";
import FullLogo from "./../assets/UNGAR-FULL.svg";

// import useOnScreen from "../../utils/useOnScreen.jsx"
import VisibilitySensor from "react-visibility-sensor";

//local components
// import UgArrow from "../components/arrow/arrow.jsx";
import UgAboutCard from "./../components/about/about.jsx";
// import useBreakpointInText from "../utils/useBreakpointInText.jsx";
// import useOnScreen from "../utils/useOnScreen.jsx";
// import { Helmet } from 'react-helmet'

export default function Foyer() {
  const ref = useRef();
  const [isLoaded, setLoaded] = useState(false);

  const ugFoyerNameSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -500,
  });

  const ugFoyerAboutHeadingSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100,
  });
  

  const [, setY] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [isVisible, setVisible] = useState(false);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.3)",
    config: { duration: 400 },
  });

  return (
    <>
      <Head>
        <title>Ungar | Programmer and Designer from Austria</title>
        <meta
          name="description"
          content="Passionate Programmer (Web- and Appdevelopment) from Austria creating Blogs about self-improvement, Productivity, Programming and Minimalism."
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <motion.div
        className="ug-foyer"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="ug-foyer-intro">
          <a.div
            style={ugFoyerAboutHeadingSpring}
            onClick={() => {
              setY({
                y: 500,
                reset: true,
                from: { y: window.scrollY },
                onFrame: (props) => window.scroll(500, props.y),
              });
            }}
            className="ug-foyer-intro-about"
          >
            about
          </a.div>
          <div id="ug-foyer-box">
            <a.div className="ug-foyer-name" style={ugFoyerNameSpring}>
              <FullLogo width="80%" height="200" className="fullLogo" />
            </a.div>
            <div className="ug-foyer-text">Programming and Blogging</div>
          </div>
        </div>
        <VisibilitySensor
          partialVisibility
          onChange={(isVis) => {
            if (isVis && isVisible != true) {
              setVisible(true);
            }
          }}
        >
          <a.div style={springProps} ref={ref}>
            <div className="about-introbox">
              <div className="about-greeting"> Hi there ! </div>
              <br />
              <div className="about-introduction">
                I`m Michael, a young programmer and designer from Upper Austria
                focused on creating flawless code and beautiful interfaces for
                humans.
              </div>
            </div>
          </a.div>
        </VisibilitySensor>
        <UgAboutCard
          heading="Starting to code"
          subheading="My Journey"
          description="I was about 14 years old when I got exposed to code for the first time. Back then I just tried to play around with HTML in order to manipulate the static presentation of websites. My next two object-oriented programming languages where Java and C#. My preferred frameworks for Web Apps are React and Vue. I also tend to use TypeScript, Scss and the VSCode TextEditor to make my life easier. Due to my high experience in React I also used React Native to create Mobile Apps, but right now I am doing a lot with flutter because it has great support."
        />
        <UgAboutCard
          subheading="Now"
          heading="Fast forward"
          description="Currently my everyday life consists of planning, designing and creating Mobile- and Webapplications. On the side I am also interested into programming microcontrollers and creating innovative projects. "
        />
        <UgAboutCard
          subheading="Expertise"
          heading="My Focus"
          description="I mainly focus on Design & Web Development for optimal digital representation. Besides that I am also capable of implementing Mobile-apps."
        />
        <div className="bottom-bar">
          <div>2018-now</div>
          <div>2018-now</div>
        </div>
      </motion.div>
    </>
  );
}

// function Foyerdd() {
//   const [isLoaded, setLoaded] = useState(false);

//   const ugFoyerNameSpring = useSpring({
//     opacity: isLoaded ? 1 : 0,
//     marginTop: isLoaded ? 0 : -500,
//   });

//   const ugFoyerAboutHeadingSpring = useSpring({
//     opacity: isLoaded ? 1 : 0,
//     marginTop: isLoaded ? 0 : -100,
//   });

//   const [, setY] = useSpring(() => ({ y: 0 }));

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Ungar | Blogging, Programming and Self-improvement</title>
//         <meta name="description" content="Passionate Programmer (Web- and Appdevelopment) from Austria creating Blogs about self-improvement, Productivity, Programming and Minimalism." />
//         <meta name="theme-color" content="#000000" />
//       </Helmet>
//       <motion.div
//         className="ug-foyer"
//         exit={{ opacity: 0 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <div className="ug-foyer-intro">
//           <a.div
//             style={ugFoyerAboutHeadingSpring}
//             onClick={() => {
//               setY({
//                 y: 500,
//                 reset: true,
//                 from: { y: window.scrollY },
//                 onFrame: (props) => window.scroll(500, props.y),
//               });
//             }}
//             className="ug-foyer-intro-about"
//           >
//             about
//           </a.div>
//           <div id="ug-foyer-box">
//             <a.div className="ug-foyer-name" style={ugFoyerNameSpring}>
//               <FullLogo width="80%" height="200" className="fullLogo" />
//             </a.div>
//             <div className="ug-foyer-text">Programming and Blogging</div>
//           </div>
//         </div>
//         <UgAboutCard
//           heading="Who am I ?"
//           description="My Name is Ungar Michael and my Passion is to develop and organise Softwareprojects. I really love learning new things and improving myself."
//         />

//         <UgAboutCard
//           heading="What am I doing ?"
//           description="I plan, design and create Mobile- and Webapplications. I also started to create content in form of blogs and videos in order to share my thoughts, experiences and opinions with an audience.  "
//         />
//       </motion.div>
//     </>
//   );
// }
