/*
· Zadání:

o Vytvořte funkci greet(), která přijme jméno jako argument a vrátí personalizovaný pozdrav.

o Vytvořte funkci, která seřadí pole čísel od nejmenšího po největší. 
*/

function greet(name: string): string {
  return `Ahoj, ${name}!`;
}

function sortNumbers(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}

export default function App5() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
      alert(greet("Petr"));
      alert(sortNumbers([5, 2, 3, 4, 1]).join(", "));
    }}>
      Funkce
    </button>
  )
}