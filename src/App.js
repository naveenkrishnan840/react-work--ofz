import React from 'react';
import './style.css';
import UseEffect from 'react';
// UseEffect(() => console.log('dfgdsx0'), []);

let list = [1, 2, 3, 4, 5];
list.push(6);
var el = list.map((index, b) => (
  <div classname="sgd" key={index} tabIndex="sd">
    <p>{b}</p>
    <h1>Hello StackBlitz!</h1>
    <p>Start editing to see some magic happen :)</p>
  </div>
));

console.log(el);
console.log(typeof el);
export default function App() {
  return el;
}
