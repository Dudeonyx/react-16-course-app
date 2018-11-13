import React, { Component } from 'react';
// import { Radium } from 'radium';
import styles from './Person.module.css';
import classLister from 'css-module-class-lister';

const classes = classLister(styles);
class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }
  /* componentWillUnmount() {
    console.log(
      '[Person.js] Inside componentWillUnmount()',
      `${this.props.name} is being removed`
    );
  } */
  render() {
    console.log('[Person.js] Inside render()');
    return (
      <div className={classes('Person')}>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
