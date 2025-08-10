import React, { forwardRef } from "react";

const Input = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={
        "w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary " +
        className
      }
      {...props}
    />
  );
});
Input.displayName = "Input";
export { Input };
export default Input;
