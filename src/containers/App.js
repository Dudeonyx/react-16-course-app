import React, { PureComponent } from 'react';
import styles from './App.module.css';
import classLister from 'css-module-class-lister';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
  }
  state = {
    persons: [
      { id: 'gsfhgh', name: 'Max', age: 29 },
      { id: 'sfgdshgh', name: 'Manu', age: 28 },
      { id: 'rgjjyt', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(
      '[UPDATE App.js] Inside componentReceiveProps',
      nextProps,
      nextContext
    );
  }
  /* shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[UPDATE App.js] Inside shouldComponentUpdate',
      nextProps,
      nextState,
      nextContext
    );
    return (
      this.state.persons !== nextState.persons ||
      this.state.showPersons !== nextState.showPersons
    );
  }// */
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[UPDATE App.js] Inside componentWillUpdate',
      nextProps,
      nextState,
      nextContext
    );
  }
  componentDidUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[UPDATE App.js] Inside componentDidUpdate',
      nextProps,
      nextState,
      nextContext
    );
  }

  nameChangedHandler = (evt, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = evt.target.value;
    const newPersons = [
      ...this.state.persons.slice(0, personIndex),
      person,
      ...this.state.persons.slice(personIndex + 1)
    ];
    this.setState({
      persons: newPersons
    });
  };

  toggleShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = personIndex => {
    const { persons } = this.state;
    const newPersons = [
      ...persons.slice(0, personIndex),
      ...persons.slice(personIndex + 1)
    ];
    this.setState({
      persons: newPersons
    });
  };

  render() {
    console.log('[App.js] Inside render()');
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
        <button onClick={() => this.setState({ showPersons: true })}>
          Show Persons
        </button>
        <Cockpit
          toggleShowPersons={this.toggleShowPersons}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
