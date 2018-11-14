import React, { Component } from 'react';
// import { Radium } from 'radium';
import styles from './Person.module.css';
import classLister from 'css-module-class-lister';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

const classes = classLister(styles);
class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);
    this.inputElement = React.createRef();
  }

  // componentWillMount() {
  //   console.log('[Person.js] Inside componentWillMount()');
  // }

  componentDidMount = () => {
    console.log('[Person.js] Inside componentDidMount()');
    this.props.position === 0 && this.focusInput();
  };

  focusInput = () => {
    this.inputElement.current.focus();
  };
  // /* componentWillUnmount() {
  //   console.log(
  //     '[Person.js] Inside componentWillUnmount()',
  //     `${this.props.name} is being removed`
  //   );
  // } */
  componentDidUpdate(nextProps, nextState, nextContext) {
    console.log(
      '[UPDATE Person.js] Inside componentDidUpdate',
      nextProps,
      nextState,
      nextContext
    );
    this.props.position === 0 && this.focusInput();
  }
  render() {
    console.log('[Person.js] Inside render()');
    return (
      <Aux>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
Person.propTypes = {
  clicked: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};
export default withClass(Person, classes('Person'));