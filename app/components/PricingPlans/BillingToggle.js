"use client"; // Ensures this is a Client Component

import React from "react";

// BillingToggle Component: Switch between Monthly and Annual plans
const BillingToggle = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex justify-center mb-8">
      {/* Container for toggle buttons */}
      <div className="bg-blue-100 p-1 rounded-full flex">
        {/* Monthly Button */}
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-4 py-2 font-bold rounded-full ${
            billingCycle === "monthly" ? "bg-white text-black" : "text-gray-500"
          }`}
        >
          Monthly
        </button>
        {/* Annual Button */}
        <button
          onClick={() => setBillingCycle("annual")}
          className={`px-4 py-2 font-bold rounded-full ${
            billingCycle === "annual" ? "bg-white text-black" : "text-gray-500"
          }`}
        >
          Annual
        </button>
      </div>
    </div>
  );
};

export default BillingToggle;
