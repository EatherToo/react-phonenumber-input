import './App.css'
import ReactPhonenumberInput from 'react-phonenumber-input'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <ReactPhonenumberInput
        style={{
          width: '280px',
        }}
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

export default App
