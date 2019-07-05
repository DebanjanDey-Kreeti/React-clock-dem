import React, { Component } from 'react';
import Clock from './Clock';
import Header from './Header';

function App() {    // was earlier a class component, now a function component
  return (
    <div>
      <Header title= 'React Clock' />
      <Clock />
    </div>
  );
}

export default App;