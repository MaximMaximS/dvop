/*
· Zadání:

o Napište program, který zjistí, zda je zadané číslo sudé nebo liché.

o Napište program, který na základě zadaného věku určí, jestli je uživatel plnoletý (věk ≥ 18).

§ Pokud bude plnoletý, vypište větu: „Uživatel je plnoletý“

§ Pokud je věk mezi 15 a 17, vypište větu: „Uživatel bude plnoletý za {pocet_roku}“

§ Pokud je věk menší než 15, vypište větu: „Uživatel je mladíš 15 let“ 
*/

export default function App2() {
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const number = parseInt(prompt("Zadej číslo") || "0");
          if (number % 2 === 0) {
            alert("Číslo je sudé");
          } else {
            alert("Číslo je liché");
          }
        }}
      >
        Sudé / liché
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const age = parseInt(prompt("Zadej věk") || "0");
          if (age >= 18) {
            alert("Uživatel je plnoletý");
          } else if (age >= 15) {
            alert(`Uživatel bude plnoletý za ${18 - age} let`);
          } else {
            alert("Uživatel je mladíš 15 let");
          }
        }}
      >
        Plnoletost
      </button>
    </>
  )
}