import React from 'react';
import classLister from 'css-module-class-lister';
import styles from './Cockpit.module.css';
import AuthContext from '../AuthContext/AuthContext';
import Aux from '../../hoc/Auxillary';

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
    <Aux>
      <h1>{props.title}</h1>
      <p className={classes(pClass)}>This is really working!!!</p>
      <div>
        <button
          className={classes('btn', btnClass)}
          onClick={props.toggleShowPersons}
        >
          Toggle Persons!
        </button>
        <AuthContext.Consumer>
          {({ authenticated, handler }) => {
            let loginClass = authenticated ? 'Red' : 'Green';
            return (
              <button onClick={handler} className={classes('btn', loginClass)}>
                Log {authenticated ? 'Out' : 'In'}
              </button>
            );
          }}
        </AuthContext.Consumer>
      </div>
    </Aux>
  );
};

export default React.memo(cockpit);
