import React from 'react';
import ReactDOM from 'react-dom'

import Title from './components/Title.js'

import "./styles/test.sass"

console.log("Hello world")


const Template = () => (
    <div>
        <Title />
        <p>Some text from a component</p>
    </div>
)

ReactDOM.render(<Template />, document.getElementById('app'))