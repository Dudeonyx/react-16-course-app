import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.table([error, errorInfo]);
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occured and it's all your fault!!!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
