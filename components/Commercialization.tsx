import React from "react";

const Commercialization = () => {
  const packages = [
    {
      title: "Silver Package",
      price: "Free",
      features: [
        "Basic legal document analysis",
        "Limited case search",
        "Standard response time",
        "Email support",
        "Basic analytics",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      title: "Gold Package",
      price: "$49",
      period: "/month",
      features: [
        "Advanced legal document analysis",
        "Unlimited case search",
        "Priority response time",
        "24/7 email & chat support",
        "Advanced analytics",
        "Custom templates",
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      title: "Platinum Package",
      price: "Custom",
      features: [
        "Full legal document analysis suite",
        "Unlimited everything",
        "Instant response time",
        "Dedicated support team",
        "Custom analytics dashboard",
        "API access",
        "Custom integrations",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="commercialization" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Select the perfect package for your legal needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border ${
                pkg.popular
                  ? "border-indigo-500 bg-zinc-900/50"
                  : "border-zinc-700 bg-zinc-900/30"
              } p-8 shadow-lg transition-all hover:scale-105`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-indigo-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">
                  {pkg.price}
                </span>
                {pkg.period && (
                  <span className="ml-1 text-lg text-gray-300">
                    {pkg.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <svg
                      className="h-5 w-5 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-semibold ${
                  pkg.popular
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "bg-zinc-800 text-white hover:bg-zinc-700"
                } transition-colors`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commercialization;
