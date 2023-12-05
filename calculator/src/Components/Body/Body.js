import React, { useState } from "react";
import Form from "./../Form/Form.js";
import { FaTimes } from "react-icons/fa";

export default function Body() {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const handlePayEMIClick = () => {
    setPopupVisibility(true);
  };

  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shivam's Monthly Bill
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            So long, fees. Hello, Zest. We are on a mission to make life more
            affordable for India using technology-led solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Payments Due
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Zest helps you break down whole payments into smaller manageable
              payments over 3, 6, 9 or 12 months.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            ></ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">EMIs</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ₹6890
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    INR
                  </span>
                </p>
                <a
                  href="#"
                  onClick={handlePayEMIClick}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Pay EMI
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-md">
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 bg-transparent border-none"
                onClick={() => setPopupVisibility(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
            <Form />
            <button
              type="button"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
              onClick={() => setPopupVisibility(false)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
