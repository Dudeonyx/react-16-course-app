import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }
  /* componentWillUnmount() {
    console.log(
      '[Persons.js] Inside componentWillUnmount()',
      `All Persons are being removed`
      );
    } */
  componentWillReceiveProps(nextProps, nextContext) {
    console.log(
      '[UPDATE Persons.js] Inside componentReceiveProps',
      nextProps,
      nextContext
    );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[UPDATE Persons.js] Inside shouldComponentUpdate',
      nextProps,
      nextState,
      nextContext
    );
    return (
      this.props.persons !== nextProps.persons ||
      this.props.clicked !== nextProps.clicked ||
      this.props.changed !== nextProps.changed
    );
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[UPDATE Persons.js] Inside componentWillUpdate',
      nextProps,
      nextState,
      nextContext
    );
  }
  componentDidUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[UPDATE Persons.js] Inside componentDidUpdate',
      nextProps,
      nextState,
      nextContext
    );
  }
  render() {
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => (
      <Person
        clicked={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={evt => this.props.changed(evt, person.id)}
      >
        {this.props.children}
      </Person>
    ));
  }
}
export default Persons;
