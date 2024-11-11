// todo list
import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";
import { useImmerReducer } from "use-immer";
import { Database } from "../database.types";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { action: "add"; text: string }
  | { action: "toggle"; id: number }
  | { action: "delete"; id: number }
  | { action: "set"; tasks: Task[] };

const supabase = createClient<Database>(
  "https://wgoebnvhplhxjzvewvbp.supabase.co",
  import.meta.env.SUPABASE_ANON_KEY
);

export default function App8() {
  const [text, setText] = useState("");
  const [state, dispatch] = useImmerReducer<Task[], Action>((draft, action) => {
    switch (action.action) {
      case "set":
        return action.tasks;
      case "add": {
        const id = Math.max(...draft.map((task) => task.id), 0) + 1;
        async function addTask(text: string) {
          const a = await supabase
            .from("tasks")
            .insert({ id, text, done: false });
          console.log(a);
        }
        addTask(action.text);
        draft.push({ id, text: action.text, done: false });

        break;
      }
      case "toggle": {
        const task = draft.find((task) => task.id === action.id);
        if (task) {
          task.done = !task.done;
        }

        async function updateTask(id: number) {
          const e = await supabase
            .from("tasks")
            .update({ done: task?.done })
            .eq("id", id);
          console.log(e);
        }

        updateTask(action.id);

        break;
      }
      case "delete": {
        const index = draft.findIndex((task) => task.id === action.id);
        if (index !== -1) {
          draft.splice(index, 1);
        }

        async function deleteTask(id: number) {
          const d = await supabase.from("tasks").delete().eq("id", id);
          console.log(d);
        }

        deleteTask(action.id);
        break;
      }
    }
  }, []);

  const getTasks = useCallback(async () => {
    const { data } = await supabase.from("tasks").select();

    if (data) {
      const tasks: Task[] = data.map((task) => ({
        id: task.id,
        text: task.text,
        done: task.done,
      }));

      dispatch({ action: "set", tasks });
    }
  }, [dispatch]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

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
