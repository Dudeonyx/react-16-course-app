import React from 'react';
import Person from './Person/Person';

const Persons = props => (
  <div>
    {props.persons.map((person, index) => {
      return (
        <Person
          clicked={() => props.clicked(index)}
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

export default Persons;
