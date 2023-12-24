import React from "react";

export default function DoubleArrow() {
  return (
    <a href="#card-section" className="pointer-events-auto">
      <svg
        className="mt-2 animate-bounce fill-white"
        viewBox="0 -960 960 960"
        width="80"
      >
        <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
      </svg>
    </a>
  );
}
