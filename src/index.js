import React from 'react'
import ReactDOM from 'react-dom'
import ImageRenderer from './components/ImageRenderer'
import './index.css'

const App = () => {
    return <ImageRenderer />
}

ReactDOM.render(<App />, document.getElementById('root'))
