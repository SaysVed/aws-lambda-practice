import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    amount: "",
    month: "",
    lateCharges: "",
    emiNo: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...

    // Replace history.push with useNavigate
    navigate(`/pay-emi`, {
      state: {
        amount: formData.amount,
        month: formData.month,
        lateCharges: formData.lateCharges,
        emiNo: formData.emiNo,
      },
    });
  };


  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Enter Details</h2>

          <form onSubmit={handleSubmit}>
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
                value={formData.amount}
                onChange={handleChange}
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
                value={formData.month}
                onChange={handleChange}
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
                value={formData.lateCharges}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="emiNo"
                className="block text-gray-700 font-bold mb-2"
              >
                EMI Number
              </label>
              <input
                type="number"
                id="emiNo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter EMI number"
                value={formData.emiNo}
                onChange={handleChange}
              />
            </div>

            <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
        onClick={handleSubmit}
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
