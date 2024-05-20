import React from "react";

export default function YoutubeSVG(
  props: React.SVGProps<SVGSVGElement> & { alt: string },
) {
  return (
    <svg
      role="img"
      aria-labelledby="youtube-icon"
      width={64}
      height={45}
      viewBox="0 0 64 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title id="youtube-icon">{props.alt}</title>
      <path
        d="M61.836 6.948a7.936 7.936 0 00-5.584-5.62C51.327 0 31.578 0 31.578 0S11.828 0 6.903 1.328a7.936 7.936 0 00-5.583 5.62C0 11.905 0 22.248 0 22.248s0 10.343 1.32 15.3c.726 2.735 2.866 4.799 5.583 5.53 4.926 1.328 24.675 1.328 24.675 1.328s19.75 0 24.674-1.328c2.718-.731 4.858-2.795 5.584-5.53 1.32-4.957 1.32-15.3 1.32-15.3s0-10.343-1.32-15.3zm-36.717 24.69v-18.78l16.506 9.39-16.506 9.39z"
        fill="#18181B"
      />
    </svg>
  );
}
