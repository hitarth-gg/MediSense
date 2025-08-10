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
      className={`flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-white hover:border-gray-400 ${
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
  return <span className="text-gray-900">{selectedValue || placeholder}</span>;
}

export function SelectContent({ children }) {
  const { isOpen } = useContext(SelectContext);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
      {children}
    </div>
  );
}

export function SelectItem({ value, children }) {
  const { handleValueChange, selectedValue } = useContext(SelectContext);

  return (
    <div
      className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
        selectedValue === value ? "bg-blue-50 text-blue-600" : "text-gray-900"
      }`}
      onClick={() => handleValueChange(value)}
      data-value={value}
    >
      {children}
    </div>
  );
}

export default Select;
