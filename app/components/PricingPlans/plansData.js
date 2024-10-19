// Array of plan objects containing details for each pricing plan
export const plansData = [
  {
    title: "Trial",
    price: "Try now",
    description: "Get personalized template",
    features: [
      "25+ data sources",
      "GPT4, LinkedIn and others",
      "Access to Slack community",
      "10+ templates to scale your outbound",
    ],
    footerText: ["Explore product capabilities"],
    buttonText: "Try Now",
    buttonStyle: "bg-blue-600 text-white",
    priceStyle: "text-black",
  },
  {
    title: "Growth",
    price: "$229/month", // This will change dynamically based on the billing cycle
    description: <s>$459</s>,
    discount: "50% off",
    features: [
      "8,000 Credits",
      "Webhook, HTTP API",
      "Credit rollover (up to 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead",
      "Dedicated 3 hours from Bitscale expert",
    ],
    footerText: [
      "Unlimited leads search",
      "Fully enriched 5000 leads",
      "Personalized outreach at scale",
    ],
    buttonText: "Continue with Growth",
    buttonStyle: "bg-blue-600 text-white",
    priceStyle: "text-black",
  },
  {
    title: "Booster",
    price: "$499/month", // This will change dynamically based on the billing cycle
    description: <s>$999</s>,
    discount: "50% off",
    features: [
      "25,000 Credits",
      "Webhook, HTTP API",
      "Credit rollover (up to 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead",
      "Dedicated 8 hours from Bitscale expert",
      "2-way HubSpot integration",
      "Advanced models like Claude Sonnet",
    ],
    footerText: [
      "Unlimited leads search",
      "Fully enriched 15000 leads",
      "Personalized outreach at scale",
    ],
    buttonText: "Continue with Booster",
    buttonStyle: "bg-white text-blue-900",
    priceStyle: "text-white",
    cardStyle: "text-white",
    style: {
      background: "linear-gradient(180deg, #1E429F 0%, #0B1839 100%)",
    },
    popularBadge: (
      <div className="absolute top-4 right-4 bg-gray-200 text-blue-900 font-semibold px-3 py-1 rounded-full text-sm">
        Popular
      </div>
    ),
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    description: "",
    discount: "",
    features: [
      "Data privacy certification",
      "Priority Support",
      "Dedicated Bitscale expert",
      "Private Slack Channel",
      "Collaborative workspace and templates",
    ],
    footerText: [
      "Perfect for High-Volume End-to-End CRM Data Enrichment",
      "Unlimited list of leads with unlimited data points",
    ],
    buttonText: "Try Now",
    buttonStyle: "bg-blue-600 text-white",
    priceStyle: "text-black",
  },
];
