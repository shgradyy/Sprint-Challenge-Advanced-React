import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar';
import { render } from "@testing-library/react";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders with no errors', () => {
  const div = document.createElement('div')
  render(<NavBar />, div);
});

test('displays title correctly', () => {
  const {getByText} = render(<App />);
  getByText("Players")
})