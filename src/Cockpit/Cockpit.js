import React from 'react';
import Persons from '../components/Persons/Persons';
import classLister from 'css-module-class-lister';
import styles from './Cockpit.module.css';

const Cockpit = props => {
  const classes = classLister(styles);
  console.log(styles, Cockpit);
  let btnClass = '';
  btnClass = props.showPersons ? 'Green' : '';
  btnClass = props.persons.length <= 2 ? 'Orange' : btnClass;
  btnClass = props.persons.length <= 1 ? 'Red' : btnClass;
  return (
    <div className={classes('Cockpit')}>
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working!!!</p>
      <button className={classes(btnClass)} onClick={props.toggleShowPersons}>
        Toggle Persons!
      </button>
      <Persons
        showPersons={props.showPersons}
        persons={props.persons}
        click={props.deletePersonHandler}
        changed={props.nameChangedHandler}
      >
        {props.children}
      </Persons>
    </div>
  );
};

export default Cockpit;
