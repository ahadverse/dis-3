import React from "react";

const TableToolbar = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-bg-surface3 border border-border rounded-md px-2 py-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default TableToolbar;
