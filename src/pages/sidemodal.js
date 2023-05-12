import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar content */}
      <div className="sidebar w-1/2 h-full relative">
        {/* Sidebar content here */}
        <button onClick={openModal}>Open Modal</button>

        {/* Modal */}
        {isOpen && (
          <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              static
              className="inset-0 overflow-hidden fixed w-1/2"
              open={isOpen}
              onClose={closeModal}
            >
              <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 w-1/2" />

                <div className="bg-white p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full rounded-2xl shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        )}
      </div>
      <div className="w-1/2 h-full">Close</div>
    </div>
  );
};

export default Sidebar;
