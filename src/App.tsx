import './App.css'
import Person from "./components/Person/Person.tsx";
import {useState} from "react";

interface IPerson {
    name: string;
    age: number;
    hobby?:  string | null,
}
const App = () => {
    const [people, setPeople] = useState<IPerson[]>([
        {name: "John", age: 28, hobby: "Coding"},
        {name: "Jane", age: 30},
    ]);

    const changeNameToFirstPerson = () => {
        console.log('Click the button');
        setPeople([
            {name: "Aizhana", age: 28, hobby: "Coding"},
            {name: "Jane", age: 30},
        ])
    };

  return (
    <>
       <Person name={people[0].name} age={people[0].age}>
           <p><b>Hobby:</b> {people[0].hobby}</p>
       </Person>
        <Person name={people[1].name} age={people[1].age}>
        </Person>
        <button onClick={changeNameToFirstPerson} type="button">Change name to first person</button>
    </>
  )
};

export default App
