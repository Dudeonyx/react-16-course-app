import React from 'react';
import classLister from 'css-module-class-lister';
import styles from './Cockpit.module.css';

const classes = classLister(styles);

const cockpit = props => {
  let btnClass = '';
  const numOfPersons = props.persons.length;
  if (props.showPersons) {
    if (numOfPersons < 1) {
      btnClass = 'Black';
    } else if (numOfPersons < 2) {
      btnClass = 'Red';
    } else if (numOfPersons < 3) {
      btnClass = 'Orange';
    } else {
      btnClass = 'Green';
    }
  }
  let pClass = [];
  props.persons.length <= 1 && pClass.push('Red');
  props.persons.length <= 0 && pClass.push('Bigger');

  return (
    <div className={classes('Cockpit')}>
      <h1>{props.title}</h1>
      <p className={classes(pClass)}>This is really working!!!</p>
      <button className={classes(btnClass)} onClick={props.toggleShowPersons}>
        Toggle Persons!
      </button>
    </div>
  );
};

export default cockpit;
