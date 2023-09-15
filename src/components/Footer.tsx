import React from "react";

function Footer() {
  return (
    <div className="flex h-[60px] items-center  border-t-2 w-full border-black bottom-0">
      <h1 className="mx-auto"> © {new Date().getFullYear()} By Ferdian</h1>
    </div>
  );
}

export default Footer;
