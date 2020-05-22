import React from 'react';
import ReactDOM from 'react-dom'

import Title from './components/Title.js'

console.log("Hello world")

// const Template = (
//     React.createElement('p', {}, "Some text")
// )

// ReactDOM.render(Template, document.getElementById('app'))

const Template = () => (
    <div>
        <Title />
        <p>Some text from a component</p>
    </div>
)

ReactDOM.render(<Template />, document.getElementById('app'))