"use client";
import React from "react";

import { useRouter } from "next/navigation";

function UserRouter() {
  const router = useRouter();
  return (
    <div>
      <h2 onClick={() => router.push("about")}>About Page</h2>
    </div>
  );
}

export default UserRouter;
