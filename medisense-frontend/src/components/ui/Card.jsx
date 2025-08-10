import React from "react";

export function Card({ children, className = "" }) {
  return <div className={"rounded-lg bg-white shadow " + className}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return <div className={"px-6 py-6 " + className}>{children}</div>;
}
export function CardTitle({ children, className = "" }) {
  return <h3 className={"text-lg font-semibold " + className}>{children}</h3>;
}
export function CardDescription({ children, className = "" }) {
  return <p className={"text-sm text-muted-foreground " + className}>{children}</p>;
}
export function CardContent({ children, className = "" }) {
  return <div className={"px-6 pb-6 " + className}>{children}</div>;
}

export default Card;
