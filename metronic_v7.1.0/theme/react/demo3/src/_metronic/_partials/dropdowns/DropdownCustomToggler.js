/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from "react";

export const DropdownCustomToggler = forwardRef((props, ref) => {
  return (
    <a
      ref={ref}
      className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </a>
  );
});
