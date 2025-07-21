import * as React from "react";

export function IconSearch({ width, onClick }) {
  return (
    <svg
      onClick={onClick}
      // aria-labelledby={titleId}
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
    >
      {/*{title ? <title id={titleId}>{title}</title> : null}*/}
      <path
        d="M14.4268 14.54L17.9 17.9M16.78 8.94001C16.78 13.2699 13.2699 16.78 8.93998 16.78C4.61006 16.78 1.09998 13.2699 1.09998 8.94001C1.09998 4.61009 4.61006 1.10001 8.93998 1.10001C13.2699 1.10001 16.78 4.61009 16.78 8.94001Z"
        stroke="#848C9D"
      />
    </svg>
  );
}
