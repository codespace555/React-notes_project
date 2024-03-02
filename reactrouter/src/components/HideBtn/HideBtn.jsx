import React from 'react'
import { useLocation } from 'react-router-dom';

export default function HideBtn({pathsToHide, buttonContent}) {

  const location = useLocation();
  const isButtonHidden = pathsToHide.includes(location.pathname);

  if (isButtonHidden) {
    return null;
  }

  return (
    <button>
      {buttonContent}
    </button>
  );
};
  

