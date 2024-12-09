"use client";

import { useState } from "react";
import { getResponse } from "./chatlib";

// Design a ChatGPT like chat interface, with history of messages, an input field, and a submit button, in a form.

export default function Chat() {
  const [history, setHistory] = useState([] as { role: string; content: string }[]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getResponse(input);
        if (response === null) {
          alert("Error: No response from server");
          return;
        }
        setHistory([...history, { role: "user", content: input }, { role: "system", content: response }]);
        setInput("");
        setLoading(false);
      }}
      className="flex flex-col items-center justify-center w-full max-w-xl p-4 bg-gray-900 rounded-lg"
    >
      <div className="flex flex-col w-full space-y-2">
        {history.map((msg, i) => (
          <div key={i} className={`${msg.role === "user" ? "justify-end" : "justify-start"} flex w-full space-x-4`}>
            <span className={`space-x-4 p-2 bg-${msg.role === "user" ? "blue" : "green"}-600 rounded-lg`}>{msg.content}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="w-full p-2 bg-gray-800 rounded-lg"
      />
      <button type="submit" className={`w-full mt-4 p-2 bg-blue-600 rounded-lg ${loading ? "cursor-not-allowed" : "hover:bg-blue-700"}`}>
        {loading ? "Thinking..." : "Send"}
      </button>
    </form>
    
  );
}
