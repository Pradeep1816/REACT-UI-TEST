import React from "react";

function Layout({ children, className }) {
  return <div className={`w-[75%] m-auto ${className}`}>{children}</div>;
}

export default Layout;
