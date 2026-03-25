"use client";

import React from "react";
import Navbar from "./Navbar";

const NavWrapper = () => {
  const host = typeof window !== "undefined" ? window.location.hostname : "";

  const isSubdomain = host.split(".").length > 1;

  if (isSubdomain) return null;

  return <Navbar />;
};

export default NavWrapper;
