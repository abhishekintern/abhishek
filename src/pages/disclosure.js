import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const closures = [
  {
    title: "1 What is your refund policy?",
    desc: "1 If you're unhappy with your purchase for any reason, email us within 90 days and we'll  you in full, no questions asked.",
  },
  {
    title: "2 What is your refund policy?",
    desc: "2 If you're unhappy with your purchase for any reason, email us within 90 days and we'll  you in full, no questions asked.",
  },
  {
    title: "3 What is your refund policy?",
    desc: "3 If you're unhappy with your purchase for any reason, email us within 90 days and we'll  you in full, no questions asked.",
  },
];

export default function DiclosurePOC() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {closures.map((one, i) => (
          <Disclosure key={i}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  as={"div"}
                  onClick={() =>
                    setOpenIndex((prev) => (prev === i ? null : i))
                  }
                  className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 cursor-pointer"
                >
                  <span>{one.title}</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                {openIndex === i && (
                  <Disclosure.Panel
                    static
                    className="px-4 pt-4 pb-2 text-sm text-gray-500"
                  >
                    {one.desc}
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
