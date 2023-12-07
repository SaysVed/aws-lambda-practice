import React from "react";

const P2Body = () => {
  // Extract form data from the URL parameters
  const urlSearchParams = new URLSearchParams(window.location.search);
  const amount = urlSearchParams.get("amount") || "";
  const month = urlSearchParams.get("month") || "";
  const lateCharges = urlSearchParams.get("lateCharges") || "";
  const emiNo = urlSearchParams.get("emiNo") || "";

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">EMI Payment Information</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Amount</label>
          <div className="text-gray-800">{amount}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Month</label>
          <div className="text-gray-800">{month}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Late Charges</label>
          <div className="text-gray-800">{lateCharges}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">EMI Number</label>
          <div className="text-gray-800">{emiNo}</div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-500"
            // onClick={onPreClose}
          >
            Pre Close
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-500"
            // onClick={onPayEMI}
          >
            Pay EMI
          </button>
        </div>
      </div>
    </div>
  );
};

export default P2Body;
