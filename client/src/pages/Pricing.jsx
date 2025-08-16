import React, { useState } from "react";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthly: 10,
      yearly: 100,
      features: [
        "5 Projects",
        "Basic Support",
        "1 GB Storage",
        "Community Access",
      ],
    },
    {
      name: "Standard",
      monthly: 20,
      yearly: 200,
      features: [
        "50 Projects",
        "Priority Support",
        "10 GB Storage",
        "Community Access",
      ],
    },
    {
      name: "Premium",
      monthly: 40,
      yearly: 400,
      features: [
        "Unlimited Projects",
        "24/7 Support",
        "100 GB Storage",
        "Advanced Analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Pricing Plans</h2>
        <p className="text-gray-500 mt-3">Choose the plan that fits you best</p>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-center mb-10">
        <span className={`mr-3 ${!isYearly ? "text-blue-600" : "text-gray-500"}`}>
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
        <span className={`ml-3 ${isYearly ? "text-blue-600" : "text-gray-500"}`}>
          Yearly
        </span>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-extrabold text-blue-600 mb-6">
              ${isYearly ? plan.yearly : plan.monthly}
              <span className="text-lg font-medium text-gray-500">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center text-gray-600">
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
