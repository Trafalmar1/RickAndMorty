import { useRef } from "react";

export const useScroll = () => {
  const scrollToRef = useRef<HTMLDivElement>(null);

  const executeScroll = (offset = 0) => {
    const { current: element } = scrollToRef;
    if (!element) return;

    let elemetPosition =
      window.pageYOffset + element.getBoundingClientRect().top;
    let offsetPosition = elemetPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return { scrollToRef, executeScroll };
};
export default useScroll;
