import React, { useState, useContext, createContext } from "react";

const SelectContext = createContext();

export function Select({ children, onValueChange, defaultValue = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  const contextValue = {
    isOpen,
    setIsOpen,
    selectedValue,
    handleValueChange,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, ...props }) {
  const { isOpen, setIsOpen } = useContext(SelectContext);

  return (
    <div
      {...props}
      className={`flex items-center justify-between px-3 py-2 border border-input rounded-md cursor-pointer bg-background hover:border-muted-foreground transition-colors ${
        props.className || ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <svg
        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export function SelectValue({ placeholder }) {
  const { selectedValue } = useContext(SelectContext);
  return <span className="text-foreground">{selectedValue || placeholder}</span>;
}

export function SelectContent({ children }) {
  const { isOpen } = useContext(SelectContext);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-border rounded-md shadow-lg max-h-60 overflow-auto">
      {children}
    </div>
  );
}

export function SelectItem({ value, children }) {
  const { handleValueChange, selectedValue } = useContext(SelectContext);

  return (
    <div
      className={`px-3 py-2 cursor-pointer hover:bg-muted transition-colors ${
        selectedValue === value ? "bg-primary text-primary-foreground" : "text-foreground"
      }`}
      onClick={() => handleValueChange(value)}
      data-value={value}
    >
      {children}
    </div>
  );
}

export default Select;
