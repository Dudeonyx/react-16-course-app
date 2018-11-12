import React from 'react';
// import { Radium } from 'radium';
import styles from './Person.module.css';
import classLister from 'css-module-class-lister';

const classes = classLister(styles);
const Person = props => {
  return (
    <div className={classes('Person')}>
      <p onClick={props.clicked}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
