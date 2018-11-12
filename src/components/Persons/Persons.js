import React from 'react';
import Person from './Person/Person';

const Persons = props => {
  let myPersons = null;
  if (props.showPersons) {
    myPersons = (
      <div>
        {props.persons.map((person, index) => {
          return (
            <Person
              click={() => props.click(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={evt => props.changed(evt, person.id)}
            >
              {props.children}
            </Person>
          );
        })}
      </div>
    );
  }
  return myPersons;
};

export default Persons;
