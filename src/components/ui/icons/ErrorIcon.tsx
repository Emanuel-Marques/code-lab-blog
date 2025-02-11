import { IconProps } from "@/lib/types";

export default function ErrorIcon({width, height}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0,0,256,256"
    >
      <g
        fill="#e07b67"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style={{mixBlendMode: "normal"}}
      >
        <g transform="scale(8,8)">
          <path d="M16,3c-7.16797,0 -13,5.83203 -13,13c0,7.16797 5.83203,13 13,13c7.16797,0 13,-5.83203 13,-13c0,-7.16797 -5.83203,-13 -13,-13zM16,5c6.08594,0 11,4.91406 11,11c0,6.08594 -4.91406,11 -11,11c-6.08594,0 -11,-4.91406 -11,-11c0,-6.08594 4.91406,-11 11,-11zM12.21875,10.78125l-1.4375,1.4375l3.78125,3.78125l-3.78125,3.78125l1.4375,1.4375l3.78125,-3.78125l3.78125,3.78125l1.4375,-1.4375l-3.78125,-3.78125l3.78125,-3.78125l-1.4375,-1.4375l-3.78125,3.78125z"></path>
        </g>
      </g>
    </svg>
  );
}
