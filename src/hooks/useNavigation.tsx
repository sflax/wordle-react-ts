import React, { useState } from "react";

export const useNavigation = () => {
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  return {
    showLoginModal,
    setShowLoginModal,
    showHelpModal,
    setShowHelpModal,
  };
};
