import { useRef } from "react";

export const useScroll = () => {
  const scrollToRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    if (scrollToRef.current !== null) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { scrollToRef, executeScroll };
};
export default useScroll;
