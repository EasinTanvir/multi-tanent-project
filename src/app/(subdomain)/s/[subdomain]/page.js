import React from "react";

const Subdomain = async ({ params }) => {
  const { subdomain } = await params;
  return <div>Subdomain = {subdomain} </div>;
};

export default Subdomain;
