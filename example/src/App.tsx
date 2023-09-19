import './App.css'
import PhonenumberInput, {
  PhoneNumberInputWithNativeSelect,
} from 'react-phonenumber-input'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  return (
    <div
      className="App"
      style={{
        marginTop: '100px',
      }}
    >
      <PhoneNumberInputWithNativeSelect
        value={value}
        onChange={setValue}
        style={{
          width: '200px',
          margin: 'auto',
        }}
      />

      <div
        style={{
          height: '20px',
        }}
      ></div>
      <PhonenumberInput
        value={value}
        onChange={setValue}
        style={{
          width: '200px',
          margin: 'auto',
        }}
      />
    </div>
  )
}

export default App
