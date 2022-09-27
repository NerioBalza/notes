import React from "react";

const Page = ({ className, children }) => (
  <main className={`page ${className}`}>{children}</main>
);
export default Page;
