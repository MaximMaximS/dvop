/*
· Zadání:

o Vytvořte objekt, který reprezentuje člověka se jménem, věkem a funkcí, která vrací větu, která představí tuto osobu. 

o Vytvořte objekt auto, který má vlastnosti jako značka, model a rok výroby a metodu, která vypíše plný popis auta.

o Vytvořte seznam objektů představující knihy (každá kniha má název, autora a rok vydání) a napište funkci, která vypíše všechny názvy knih. 
*/

const person = {
  name: "Petr",
  age: 30,
  introduce() {
    return `Jmenuji se ${this.name} a je mi ${this.age} let.`;
  },
};

const car = {
  brand: "Škoda",
  model: "Octavia",
  year: 2010,
  describe() {
    return `Auto je značky ${this.brand}, model ${this.model} a bylo vyrobeno v roce ${this.year}.`;
  },
};

const books = [
  { title: "Harry Potter", author: "J. K. Rowling", year: 1997 },
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
];

export default function App6() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        alert(person.introduce());
        alert(car.describe());
        alert(books.map((book) => book.title).join(", "));
      }}
    >
      Objekt
    </button>
  )
}