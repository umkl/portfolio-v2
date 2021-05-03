import React, {useState} from "react"
import {useSpring, animated as a} from 'react-spring'

function Logo(props) {
  const [isHovered, setHovered] = useState(false);
  const {logoColor} = useSpring(
    {
      logoColor: props.active ? "#FFFFFF": (isHovered? "#FFFFFF": "#a3a3a3")
    }
  )
  const handleMouseEnter = () => {
    setHovered(true)
  }
  const handleMouseLeave = () => {
    setHovered(false)
  }
  return (
    <a.svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      stroke={logoColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <path
        d="M277.897 297.457V87.33h82.294v243.685l-60.577 48.737h-74.223a114.476 114.476 0 01-114.478-114.479V87.33h82.293v171.173c0 21.515 17.441 38.955 38.956 38.955h45.735z"
        fill="none"
        
        strokeWidth={9.4997533}
      />
      <path
        d="M309 353V90h103v305l-75.818 61H232.184C157.581 456 100 398.246 100 323.417V90h103v217.885C203 333.347 222.594 353 247.98 353H309z"
        fill="none"
        
        strokeWidth={11.44}
        transform="matrix(.79897 .06208 0 .79897 71.913 39.468)"
      />
      <path
        d="M110.91 87.33l40.898 30.256M277.895 297.458l40.897 43.229M277.895 87.33l41.195 44.259M360.192 87.33l40.897 49.624M360.192 331.014l40.897 49.624M299.614 379.751l40.173 44.86M193.208 87.33l40.897 36.647"
        fill="none"
        
        strokeWidth={9.490173}
      />
    </a.svg>
  )
}

export default Logo;
