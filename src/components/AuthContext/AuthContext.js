import React from 'react';

const AuthContext = React.createContext({
  authenticated: false,
  handler: () => {},
});

export default AuthContext;
