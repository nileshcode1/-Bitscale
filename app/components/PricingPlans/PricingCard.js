"use client"; // Ensure this is a Client Component

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// PricingCard Component: Renders a single pricing plan card
const PricingCard = ({ plan }) => {
  return (
    <div
      className={`shadow-lg rounded-lg p-6 flex flex-col h-full border-2 relative ${
        plan.cardStyle || ""
      }`}
      style={plan.style}
    >
      {/* Popular Badge, if present */}
      {plan.popularBadge}

      {/* Main Content Section */}
      <div className="flex-grow">
        <h3 className={`${plan.priceStyle} text-xl font-semibold`}>
          {plan.title}
        </h3>
        <p className={`${plan.priceStyle} text-3xl font-bold mt-4`}>
          {plan.price}
        </p>
        {plan.description && (
          <p className={plan.priceStyle}>
            {plan.description}{" "}
            {plan.discount && (
              <span className="text-green-400">{plan.discount}</span>
            )}
          </p>
        )}
        {/* Features List */}
        <ul className={`mt-4 space-y-4 ${plan.priceStyle}`}>
          {plan.features.map((text, idx) => (
            <li
              key={idx}
              className="flex items-start"
              style={{ fontSize: "14.25px", lineHeight: "1.5" }}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`mr-2 h-4 w-4 flex-shrink-0 ${
                  plan.priceStyle === "text-white" ? "text-white" : "text-black"
                }`}
                style={{ marginTop: "0.2em" }}
              />
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-b-2 border-blue-400 mt-4"></div>

      {/* Footer Section */}
      <div className="flex flex-col justify-end h-40">
        <ul className={`list-disc ml-4 ${plan.priceStyle}`}>
          {plan.footerText.map((text, idx) => (
            <li key={idx} className={plan.priceStyle}>
              {text}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button className={`w-full py-2 mt-4 ${plan.buttonStyle} rounded-lg`}>
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
