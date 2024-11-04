import App1 from "./apps/app1";
import App2 from "./apps/app2";
import App3 from "./apps/app3";
import App4 from "./apps/app4";
import App5 from "./apps/app5";
import App6 from "./apps/app6";
import App7 from "./apps/app7";
import App8 from "./apps/app8";
import Quote from "./apps/quote";

// 4x2 grid

function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded border border-gray-200 p-4">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-4 gap-4">
        <Wrap>
          <App1 />
        </Wrap>
        <Wrap>
          <App2 />
        </Wrap>
        <Wrap>
          <App3 />
        </Wrap>
        <Wrap>
          <App4 />
        </Wrap>
        <Wrap>
          <App5 />
        </Wrap>
        <Wrap>
          <App6 />
        </Wrap>
        <Wrap>
          <App7 />
        </Wrap>
        <Wrap>
          <App8 />
        </Wrap>
      </div>
      <div className="text-gray-500 mt-4">
        <p>
          <Quote />
        </p>
      </div>
    </main>
  );
}

export default App;
