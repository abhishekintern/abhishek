// Without using autoPlacement
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function TooltipTippy({ place = "top" }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, placement } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: place,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(15),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
    ],
  });

  return (
    <>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        ref={refs.setReference}
      >
        Hover or focus me
      </button>

      <Transition
        as={Fragment}
        show={true}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div
          className="bg-black border text-white w-fit px-2 py-0.5 rounded-md flex items-center justify-center"
          ref={refs.setFloating}
          style={floatingStyles}
        >
          <span className="z-20">I&apos;m a tooltipTippy!</span>
          <span
            className={classNames(
              "w-4 h-4 bg-black z-10 absolute",
              placement === "top"
                ? "w-4 h-4 rotate-[135deg] bottom-[-8px]"
                : placement === "bottom"
                ? "w-4 h-4 rotate-[135deg] top-[-8px]"
                : placement === "left"
                ? "w-4 h-4 rotate-[135deg] right-[-8px]"
                : placement === "right"
                ? "w-4 h-4 rotate-[135deg] left-[-8px]"
                : ""
            )}
          ></span>
        </div>
      </Transition>
    </>
  );
}
