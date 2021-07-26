import { RefObject, useRef } from "react";

const useKeyClick = (trigger?: () => any, ownRef?: RefObject<any>, elementToFocus?: RefObject<any>) => {
  const _ref = useRef<any | null>(null);
  const ref = ownRef || _ref;
  const handleKeyboardEvent = (e: React.KeyboardEvent<any>) => {
    if (e.key === " " || e.key === "Enter") {
      if (trigger) {
        trigger();
        elementToFocus?.current.focus();
        return;
      }
      ref.current?.click();
      elementToFocus?.current.focus();
    }
  };

  return { ref, handleKeyboardEvent };
};

export default useKeyClick;
