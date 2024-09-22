/*
· Zadání:

o Napište program, který vypíše všechna čísla od 1 do 100. 
*/

export default function App3() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
      let numbers = "";
      for (let i = 1; i <= 100; i++) {
        numbers += i + " ";
      }
      alert(numbers);
    }
    }>
      Čísla 1-100
    </button>
  )
}