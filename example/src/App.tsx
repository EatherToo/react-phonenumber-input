import './App.css'
import ReactPhonenumberInput, {
  CountryCode,
  SearchSelect,
  allCountries,
} from 'react-phonenumber-input'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [countryCode, setCountryCode] = useState<CountryCode>('CN')
  return (
    <div className="App">
      <ReactPhonenumberInput
        value={value}
        onChange={setValue}
        style={{
          width: '200px',
        }}
      />

      <SearchSelect
        countries={allCountries}
        countryCode={countryCode}
        onCountryCodeChange={() => {}}
        setCountryCode={setCountryCode}
      />
    </div>
  )
}

export default App
