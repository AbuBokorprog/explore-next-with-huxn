import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="grid grid-cols-4 items-center justify-between gap-52">
      <h2>
        <Link href={"/"}>Home</Link>
      </h2>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href={"/about/contact"}>Contact</Link>
      </p>
      <p>
        <Link href={"/hired"}>Hired</Link>
      </p>
    </div>
  );
}

export default Navbar;
