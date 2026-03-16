import { motion } from "framer-motion";

export default function DashboardShowcase() {

  const stats = [
    { title: "Call Volume", value: "1,240 / month" },
    { title: "Lead Conversion", value: "38%" },
    { title: "Automation Success", value: "92%" },
    { title: "Response Time", value: "1.2 sec" }
  ];

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold">
        AI Analytics Dashboard
      </h2>

      <p className="mt-4 text-gray-400">
        Monitor performance and automation insights in real time.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6"
          >
            <h3 className="text-lg text-gray-400">
              {item.title}
            </h3>

            <p className="text-3xl font-bold mt-2">
              {item.value}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}