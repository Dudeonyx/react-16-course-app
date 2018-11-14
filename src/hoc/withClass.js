import React, { Component } from 'react';

const withClass = (WrappedComponent, classes) => {
  class WithClass extends Component {
    render() {
      return (
        <div className={classes}>
          <WrappedComponent {...this.props} ref={this.props.forwardedRef} />
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <WithClass {...props} forwardedRef={ref} />
  ));
};

export default withClass;
