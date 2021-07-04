import { animated as a, useSpring } from "react-spring";

function AboutElement() {
  const animatedStyle = useSpring({});

  return <g transform="matrix(1,0,0,1,108.635,107.369)">
  <text
    x="202.383px"
    y="588.787px"
    style="font-family:'ZCOOLQingKeHuangYou-Regular', 'ZCOOL QingKe HuangYou';font-size:312.755px;fill:white;"
  >
    about
  </text>
</g>;
}

export function About() {
  return (
    <svg
      width={100+"%"}
      height={100+"%"}
      viewBox="0 0 1000 1000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xml:space="preserve"
      // xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
    >
      <g transform="matrix(1,0,0,1,-50.5307,-23.3298)">
        <g transform="matrix(1.11565,0,0,1.17905,-62.6165,0.573109)">
          <path
            d="M852.728,240.108L141.194,240.108L141.194,514.976C141.194,554.275 174.862,586.133 216.394,586.133L811.502,586.133L852.728,538.866L852.728,240.108Z"
            style="fill:none;stroke:white;stroke-width:19.97px;"
          />
        </g>
        <g transform="matrix(1.11565,0,0,1.17905,54.8064,99.29)">
          <path
            d="M852.728,240.108L141.194,240.108L141.194,514.976C141.194,554.275 174.862,586.133 216.394,586.133L811.502,586.133L852.728,538.866L852.728,240.108Z"
            style="fill:none;stroke:white;stroke-width:19.97px;"
          />
        </g>
        
      </g>
    </svg>
  );
}

