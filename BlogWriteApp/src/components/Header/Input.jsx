import React, { useId } from "react";

const Input = React.forwardRef(({ type = "text", label, placeHolder, className = "", ...prpos }, ref) => {

    const id = useId();
    return (
      <>
       <div className='w-full'>
          {label && (
            <label className="inline-block mb-1 pl-1" htmlFor={id}>
              {label}
            </label>
          )}

          <input
            type={type}
            ref={ref}
            id={id}
            className={`px-3 py-2 rounded-lg bg-white
        text-black outline-none focus:bg-gray-50
        duration-200 border border-gray-200 w-full ${className}`}
            placeholder={placeHolder || ""}
            {...prpos}
          />
        </div>
      </>
    );
  }
);

export default Input;
