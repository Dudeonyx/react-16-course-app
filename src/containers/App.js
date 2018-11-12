import React, { Component } from 'react';
import styles from './App.module.css';
import classLister from 'css-module-class-lister';
import Cockpit from '../Cockpit/Cockpit';

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
    return (
      <div className={classes('App', 'D-flex-c')}>
        <Cockpit
          toggleShowPersons={this.toggleShowPersons}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangedHandler={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
