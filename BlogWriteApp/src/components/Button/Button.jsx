import React from "react";

function Button({ btntext,handelBtn ,className ="" ,type,...props}) {
  return (
    <button type={type} className={`${className}`} onClick={handelBtn} {...props}>
      <AwesomeButton  type="primary">
        {btntext}
      </AwesomeButton>
    </button>
  );
}

export default Button;
