export default function ContactSection() {

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold">
        Start Automating Your Business
      </h2>

      <p className="mt-4 text-gray-400">
        Book a free consultation and discover how AI can transform your business.
      </p>

      <div className="mt-10 max-w-xl mx-auto bg-gray-900 border border-gray-700 rounded-xl p-8">

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <textarea
            placeholder="What automation do you need?"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded-lg hover:scale-105 transition"
          >
            Request Consultation
          </button>

        </form>

        <div className="mt-6">

          <a
            href="https://wa.me/919461113949"
            className="text-green-400 underline"
          >
            Chat with us on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}