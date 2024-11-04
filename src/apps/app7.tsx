/*
· Zadání:

o Napište jednoduchý JS skript, který změní text na stránce po kliknutí na tlačítko.

o Vytvořte formulář, který po odeslání zobrazí jméno uživatele na stránce.

o Vytvořte jednoduchou kalkulačku přímo na webové stránce, která bude reagovat na vstupy uživatele. 
*/

import { useState } from "react";

export default function App7() {
  const [text, setText] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setText("Text byl změněn")}
      >
        Změnit text
      </button>
      <p>{text}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName(nameInput);
        }}
      >
        <input
          type="text"
          name="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button type="submit">Odeslat</button>
      </form>
      <p>{name}</p>
      <div className="flex">
        <input
          type="text"
          onChange={(e) => {
            const expr = e.target.value;
            // eval like a true sigma
            setResult(eval(expr).toString());
          }}
        />
        <p> = {result}</p>
      </div>
    </>
  );
}
