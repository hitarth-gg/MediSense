import React from "react";

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={"block text-sm font-medium mb-1 " + className}>
      {children}
    </label>
  );
}
export default Label;
