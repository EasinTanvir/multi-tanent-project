import NavWrapper from "@/components/NavWrapper";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <React.Fragment>
      <NavWrapper />
      {children}
    </React.Fragment>
  );
}
