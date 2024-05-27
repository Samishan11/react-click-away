import { useEffect, RefObject } from "react";

type EventType = "click" | "keydown";

const useClickAway = <T extends HTMLElement>(
  ref: RefObject<T>,
  eventType: EventType[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
      if (
        eventType.indexOf("click") !== -1 &&
        event instanceof MouseEvent &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        callback();
      } else if (
        eventType.indexOf("keydown") !== -1 &&
        event instanceof KeyboardEvent &&
        event.key === "Escape"
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, [ref, eventType, callback]);
};

export default useClickAway;
