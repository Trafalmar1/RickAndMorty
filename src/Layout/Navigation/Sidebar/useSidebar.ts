import { useState } from "react";

const useSidebar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showSidebar = () => {
    setVisible(true);
  };

  const hideSidebar = () => {
    setVisible(false);
  };

  const toggleSidebar = () => {
    setVisible((prev) => !prev);
  };

  return {
    visible,
    showSidebar,
    hideSidebar,
    toggleSidebar,
  };
};
export default useSidebar;
