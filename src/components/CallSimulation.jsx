import { useState } from "react";

export default function CallSimulation() {

  const [messages, setMessages] = useState([]);

  const demoConversation = [
    { sender: "customer", text: "Hello, I want to know about your services." },
    { sender: "ai", text: "Hello! I can help you with AI voice automation solutions." },
    { sender: "customer", text: "Can your AI handle customer support calls?" },
    { sender: "ai", text: "Yes. Our AI voice agents can answer calls, qualify leads, and book appointments automatically." }
  ];

  const startDemo = () => {

    setMessages([]);

    demoConversation.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, index * 2000);
    });

  };

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold">
        AI Voice Call Simulation
      </h2>

      <p className="mt-4 text-gray-400">
        See how the AI agent talks with customers.
      </p>

      <div className="mt-10 max-w-lg mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700">

        <div className="space-y-4 text-left">

          {messages.map((msg, i) => (

            <div
              key={i}
              className={`p-3 rounded-lg ${
                msg.sender === "ai"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              <strong>{msg.sender === "ai" ? "AI Agent" : "Customer"}:</strong>{" "}
              {msg.text}
            </div>

          ))}

        </div>

      </div>

      <button
        onClick={startDemo}
        className="mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:scale-105 transition"
      >
        Start Demo Call
      </button>

    </section>
  );
}