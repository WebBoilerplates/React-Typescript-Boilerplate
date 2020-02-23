import React from 'react';

export default function Example(): React.ComponentElement<any, any> {
  return <div>Hello, {process.env.REACT_APP_HELLO}!</div>;
}
