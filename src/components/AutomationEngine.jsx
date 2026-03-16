import { motion } from "framer-motion";

export default function AutomationEngine() {

  const steps = [
    "Website Lead",
    "WhatsApp Message",
    "AI Voice Agent",
    "CRM System",
    "Business Dashboard"
  ];

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold">
        AI Automation Engine
      </h2>

      <p className="mt-4 text-gray-400">
        See how our automation system processes customer interactions.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-12">

        {steps.map((step, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="bg-gray-900 border border-gray-700 px-6 py-4 rounded-lg"
          >
            {step}
          </motion.div>

        ))}

      </div>

    </section>
  );
}