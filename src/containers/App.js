import React, { Component } from 'react';
import styles from './App.module.css';
import classLister from 'css-module-class-lister';
import Cockpit from '../Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 'gsfhgh', name: 'Max', age: 29 },
      { id: 'sfgdshgh', name: 'Manu', age: 28 },
      { id: 'rgjjyt', name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (evt, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = evt.target.value;

    const newPersons = [
      ...this.state.persons.slice(0, personIndex),
      person,
      ...this.state.persons.slice(personIndex + 1),
    ];
    this.setState({
      persons: newPersons,
    });
  };

  toggleShowPersons = () => {
    const { showPersons } = this.state;
    this.setState({
      showPersons: !showPersons,
    });
  };

  deletePersonHandler = personIndex => {
    const { persons } = this.state;
    const newPersons = [
      ...persons.slice(0, personIndex),
      ...persons.slice(personIndex + 1),
    ];
    console.log(newPersons);
    this.setState({
      persons: newPersons,
    });
  };

  render() {
    const classes = classLister(styles);
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <div className={classes('App', 'D-flex-c')}>
        <Cockpit
          toggleShowPersons={this.toggleShowPersons}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangedHandler={this.nameChangedHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
