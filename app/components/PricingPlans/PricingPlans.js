"use client"; // Ensure this is a Client Component

import React, { useState } from "react";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";
import { plansData } from "./plansData";

// PricingPlans Component: Manages billing cycle and renders all pricing cards
const PricingPlans = () => {
  // State to manage billing cycle (Monthly/Annual)
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Cycle Toggle */}
        <BillingToggle
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />

        {/* Grid for Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {plansData.map((plan, index) => (
            <PricingCard
              key={index}
              plan={{
                ...plan,
                // Dynamic pricing adjustment based on billing cycle
                price:
                  billingCycle === "monthly"
                    ? plan.price
                    : plan.title === "Growth"
                    ? "$199/month" // For Growth plan annual pricing
                    : plan.title === "Booster"
                    ? "$449/month" // For Booster plan annual pricing
                    : plan.price,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
