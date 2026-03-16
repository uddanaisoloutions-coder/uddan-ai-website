import { useState } from "react";

export default function UseCaseGenerator() {

  const [industry, setIndustry] = useState(null);

  const solutions = {
    restaurant: [
      "AI Table Booking Agent",
      "WhatsApp Order Automation",
      "Customer Feedback Bot"
    ],
    realestate: [
      "AI Lead Qualification Agent",
      "Property Inquiry WhatsApp Bot",
      "Appointment Booking Automation"
    ],
    coaching: [
      "Student Inquiry Voice Agent",
      "Course Enrollment WhatsApp Bot",
      "Automated Follow-up System"
    ],
    retail: [
      "AI Customer Support Voice Agent",
      "Product Inquiry Chatbot",
      "Sales Analytics Dashboard"
    ]
  };

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold">
        Find AI Automation for Your Business
      </h2>

      <p className="mt-4 text-gray-400">
        Select your industry and see how AI can automate your operations.
      </p>

      {/* Industry Buttons */}

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        <button
          onClick={() => setIndustry("restaurant")}
          className="bg-gray-800 px-4 py-2 rounded-lg"
        >
          Restaurant
        </button>

        <button
          onClick={() => setIndustry("realestate")}
          className="bg-gray-800 px-4 py-2 rounded-lg"
        >
          Real Estate
        </button>

        <button
          onClick={() => setIndustry("coaching")}
          className="bg-gray-800 px-4 py-2 rounded-lg"
        >
          Coaching
        </button>

        <button
          onClick={() => setIndustry("retail")}
          className="bg-gray-800 px-4 py-2 rounded-lg"
        >
          Retail
        </button>

      </div>

      {/* Solutions */}

      {industry && (

        <div className="mt-10 max-w-lg mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700">

          <h3 className="text-xl font-semibold mb-4">
            Recommended AI Systems
          </h3>

          <ul className="space-y-2">

            {solutions[industry].map((item, index) => (
              <li key={index} className="bg-gray-800 p-3 rounded-lg">
                {item}
              </li>
            ))}

          </ul>

        </div>

      )}

    </section>
  );
}