import React from "react";
import { clsx } from "clsx";

export function Card({ children, className = "" }) {
  return (
    <div className={clsx("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={clsx("flex flex-col space-y-1.5 p-6", className)}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={clsx("text-2xl font-semibold leading-none tracking-tight", className)}>{children}</h3>;
}

export function CardDescription({ children, className = "" }) {
  return <p className={clsx("text-sm text-muted-foreground", className)}>{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={clsx("p-6 pt-0", className)}>{children}</div>;
}

export default Card;
