import React from "react";

const Form = () => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Enter Details</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-bold mb-2"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter amount"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="month"
                className="block text-gray-700 font-bold mb-2"
              >
                Month
              </label>
              <input
                type="text"
                id="month"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter month"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lateCharges"
                className="block text-gray-700 font-bold mb-2"
              >
                Late Charges
              </label>
              <input
                type="number"
                id="lateCharges"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter late charges"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="emiNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                EMI Number
              </label>
              <input
                type="number"
                id="emiNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter EMI number"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
