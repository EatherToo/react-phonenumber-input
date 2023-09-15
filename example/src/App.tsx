import './App.css'
import ReactPhonenumberInput from 'react-phonenumber-input'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <ReactPhonenumberInput value={value} onChange={setValue} />
    </div>
  )
}

export default App
