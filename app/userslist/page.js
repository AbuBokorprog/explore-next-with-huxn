import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <h2>This is usersList page</h2>
      <Link href={`/userslist/${"bokor"}`}>
        <li>bokor</li>
      </Link>
      <Link href={`/userslist/${"abu"}`}>
        <li>abu</li>
      </Link>
    </div>
  );
}

export default page;
