export default function PortfolioShowcase() {

  const projects = [
    {
      title: "AI Customer Support Voice Agent",
      description: "Handles customer support calls automatically using AI voice technology."
    },
    {
      title: "WhatsApp Lead Capture Automation",
      description: "Captures leads from WhatsApp and stores them in a CRM dashboard."
    },
    {
      title: "AI Appointment Booking System",
      description: "Automates appointment scheduling through voice agents and chat."
    },
    {
      title: "Business Analytics Dashboard",
      description: "Displays real-time insights about leads, calls, and automation performance."
    }
  ];

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold">
        AI Systems We Build
      </h2>

      <p className="mt-4 text-gray-400">
        Explore some of the automation systems we create for businesses.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}