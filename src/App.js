import "./App.css";
import ProfileCard from "./components/ProfileCard";
const people = [
  { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
  { firstName: "John", lastName: "Smith", age: 88, hairColor: "White" },
  { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
  { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Silver" },
];

function App() {
  return (
    <div className="content">
      <h1>Some cards:</h1>
      <ProfileCard person={people[0]} />
      <ProfileCard person={people[1]} />
      <ProfileCard person={people[2]} />
      <ProfileCard person={people[3]} />
    </div>
  );
}

export default App;
