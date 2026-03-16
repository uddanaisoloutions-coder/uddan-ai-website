import { useState } from "react";

export default function VoicePlayground() {

  const [text, setText] = useState("");

  const speak = () => {

    if (!text) return;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

  };

  return (
    <section className="py-24 text-center px-6">

      <h2 className="text-4xl font-bold">
        Try the AI Voice Agent
      </h2>

      <p className="mt-4 text-gray-400">
        Type a message and hear the AI voice response.
      </p>

      <div className="mt-10 max-w-xl mx-auto">

        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700"
        />

        <button
          onClick={speak}
          className="mt-6 bg-purple-600 px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Generate Voice
        </button>

      </div>

    </section>
  );

}