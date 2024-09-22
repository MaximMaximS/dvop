// todo list
import { useState } from "react";
import { useImmerReducer } from "use-immer";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { action: "add"; text: string }
  | { action: "toggle"; id: number }
  | { action: "delete"; id: number };

export default function App8() {
  const [text, setText] = useState("");
  const [state, dispatch] = useImmerReducer<Task[], Action>((draft, action) => {
    switch (action.action) {
      case "add":
        draft.push({ id: draft.length, text: action.text, done: false });
        break;
      case "toggle": {
        const task = draft.find((task) => task.id === action.id);
        if (task) {
          task.done = !task.done;
        }
        break;
      }
      case "delete": {
        const index = draft.findIndex((task) => task.id === action.id);
        if (index !== -1) {
          draft.splice(index, 1);
        }
        break;
      }
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ action: "add", text });
            setText("");
          }}
        >
          Přidat
        </button>
      </div>
      <div className="space-y-2">
        {state.map((task) => (
          <div key={task.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch({ action: "toggle", id: task.id })}
            />
            <span className={task.done ? "line-through" : ""}>{task.text}</span>
            <button onClick={() => dispatch({ action: "delete", id: task.id })}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
