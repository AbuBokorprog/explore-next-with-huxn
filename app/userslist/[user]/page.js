import React from "react";

function page({ params }) {
  return (
    <div>
      <h2>This is Users {params.user}</h2>
    </div>
  );
}

export default page;
