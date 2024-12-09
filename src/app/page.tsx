import Chat from "./chat";

// Chatgpt ripoff

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">WishGPT</h1>
      <Chat />
    </div>
  );
}
