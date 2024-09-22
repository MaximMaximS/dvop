/*
· Zadání:

o Napište skript, který vyžádá jméno uživatele a vypíše personalizovanou zprávu, např. "Ahoj, [jméno]!".

o Vytvořte program, který spočítá součet dvou čísel zadaných uživatelem.

o Napište jednoduchý program, který porovná dvě čísla a vypíše, které je větší nebo jestli jsou stejná. 
*/

export default function App1() {
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const name = prompt("Jak se jmenuješ?");
          alert(`Ahoj, ${name}!`);
        }}
      >
        Pozdrav
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const a = parseInt(prompt("Zadej první číslo") || "0");
          const b = parseInt(prompt("Zadej druhé číslo") || "0");
          alert(`Součet je ${a + b}`);
        }}
      >
        Součet
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const a = parseInt(prompt("Zadej první číslo") || "0");
          const b = parseInt(prompt("Zadej druhé číslo") || "0");
          if (a > b) {
            alert(`${a} je větší než ${b}`);
          } else if (a < b) {
            alert(`${b} je větší než ${a}`);
          } else {
            alert(`Čísla jsou stejná`);
          }
        }}
      >
        Porovnání
      </button>
    </>
  );
}
