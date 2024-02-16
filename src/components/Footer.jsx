import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="text-sm text-center text-blue-800 flex justify-center flex-col">
        <a
          className="flex items-center justify-center py-6"
          href="https://www.jeromanp.website/"
          target="_blank"
        >
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-device-imac-code"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              allowFullScreen="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9"></path>
              <path d="M3 13h18"></path>
              <path d="M8 21h3.5"></path>
              <path d="M10 17l-.5 4"></path>
              <path d="M20 21l2 -2l-2 -2"></path>
              <path d="M17 17l-2 2l2 2"></path>
            </svg>
          </span>
          Realizado por: <i>Jose Eduardo Roman</i>
        </a>
      </div>
    </footer>
  );
}
