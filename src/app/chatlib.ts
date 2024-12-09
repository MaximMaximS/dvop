"use server";

import "server-only";

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.GROK_KEY,
  baseURL: "https://api.x.ai/v1",
});

export async function getResponse(message: string) {
  const response = await openai.chat.completions.create({
    model: "grok-beta",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message },
    ],
  });
  return response.choices[0].message.content;
}
