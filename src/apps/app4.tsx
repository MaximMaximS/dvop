/*
· Zadání:

o Vytvořte pole obsahující jména několika lidí a napište program, který je všechny vypíše.

o Upravte pole tak, aby jména v poli byla řazena abecedně.

o Naplňte pole náhodnými čísly a následně vypočítejte jejich průměr. 
*/

export default function App4() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
      const names = ["Petr", "Jan", "Jana", "Marie", "Josef"];
      alert(names.join(", "));
      alert(names.sort().join(", "));

      const numbers = [1, 2, 3, 4, 5];
      const sum = numbers.reduce((a, b) => a + b, 0);
      const average = sum / numbers.length;
      alert(`Průměr je ${average}`);
    }
    }>
      Pole
    </button>
  )
}