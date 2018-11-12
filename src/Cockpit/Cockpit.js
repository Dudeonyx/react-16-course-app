import React from 'react';
import classLister from 'css-module-class-lister';
import styles from './Cockpit.module.css';

const Cockpit = props => {
  const classes = classLister(styles);
  console.log(styles, Cockpit);
  let btnClass = '';
  btnClass = props.showPersons ? 'Green' : '';
  btnClass = props.persons.length <= 2 ? 'Orange' : btnClass;
  btnClass = props.persons.length <= 1 ? 'Red' : btnClass;
  btnClass = props.persons.length <= 0 ? 'Black' : btnClass;
  let pClass = props.persons.length <= 1 ? 'Red' : '';
  return (
    <div className={classes('Cockpit')}>
      <h1>Hi, I'm a React App!</h1>
      <p className={classes(pClass)}>This is really working!!!</p>
      <button className={classes(btnClass)} onClick={props.toggleShowPersons}>
        Toggle Persons!
      </button>
    </div>
  );
};

export default Cockpit;
