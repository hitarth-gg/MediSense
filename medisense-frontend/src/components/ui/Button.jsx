import React from "react";
import { clsx } from "clsx";

const buttonVariants = {
  default:
    "bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 transition-colors duration-200",
  outline:
    "border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-200",
  ghost: "text-gray-700 hover:bg-gray-100 transition-colors duration-200",
  link: "text-teal-600 underline-offset-4 hover:underline",
  blue: "bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200",
  facilitator:
    "bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200",
  doctor:
    "bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Tag = asChild ? React.Fragment : "button";
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  return (
    <Tag
      {...props}
      className={clsx(
        baseClasses,
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}

export default Button;
