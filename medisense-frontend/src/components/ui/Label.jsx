import React from "react";
import { clsx } from "clsx";

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label 
      htmlFor={htmlFor} 
      className={clsx(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
    >
      {children}
    </label>
  );
}
export default Label;
