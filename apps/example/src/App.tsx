import './App.css'

import { useState } from 'react'
import AntSelect from './components/AntSelect'
import CallingCode from './components/CallingCode'
import AntInput from './components/AntInput'
import PhoneNumberInputWrapper from './components/PhoneNumberSelectWrapper'
import PhonenumberInput, {
  BaseReactPhonenumberInput,
  PhoneNumberInputWithNativeSelect,
} from 'react-phonenumber-text-input'

function App() {
  const [value, setValue] = useState('')
  const [valid, setValid] = useState(false)
  const [formatedPhonenumber, setFormatedPhonenumber] = useState('')
  const [fullValue, setFullValue] = useState('')
  const [value2, setValue2] = useState('')
  const [valid2, setValid2] = useState(false)
  const [formatedPhonenumber2, setFormatedPhonenumber2] = useState('')
  const [fullValue2, setFullValue2] = useState('')

  const [value3, setValue3] = useState('')
  const [valid3, setValid3] = useState(false)
  const [formatedPhonenumber3, setFormatedPhonenumber3] = useState('')
  const [fullValue3, setFullValue3] = useState('')

  return (
    <div
      className="App"
      style={{
        margin: '100px',
        textAlign: 'left',
      }}
    >
      <div>
        <label
          style={{
            lineHeight: '30px',
            fontSize: '12px',
          }}
        >
          <span>Phone Number Input with Native Select:</span>
        </label>
        <PhoneNumberInputWithNativeSelect
          value={value}
          onChange={(v, metadata) => {
            setValue(v)
            setValid(metadata.valid)
            setFormatedPhonenumber(metadata.formated)
            setFullValue(metadata.fullValue)
          }}
          style={{
            width: '200px',
          }}
        />
        <p>
          value: {value} <br />
          valid: {valid ? 'true' : 'false'} <br />
          formated Phone number: {formatedPhonenumber} <br />
          full value: {fullValue} <br />
        </p>
      </div>

      <div
        style={{
          height: '60px',
        }}
      ></div>
      <div>
        <label
          style={{
            lineHeight: '30px',
            fontSize: '12px',
          }}
        >
          <span>Phone Number Input:</span>
        </label>
        <PhonenumberInput
          value={value2}
          onChange={(v, metadata) => {
            setValue2(v)
            setValid2(metadata.valid)
            setFormatedPhonenumber2(metadata.formated)
            setFullValue2(metadata.fullValue)
          }}
          style={{
            width: '200px',
          }}
        />
        <p>
          value: {value2} <br />
          valid: {valid2 ? 'true' : 'false'} <br />
          formated Phone number: {formatedPhonenumber2} <br />
          full value: {fullValue2} <br />
        </p>
      </div>

      <div>
        <label
          style={{
            lineHeight: '30px',
            fontSize: '12px',
          }}
        >
          <span>Custom Phone Number Input by use ant desgin:</span>
        </label>
        <BaseReactPhonenumberInput
          value={value3}
          onChange={(v, metadata) => {
            setValue3(v)
            setValid3(metadata.valid)
            setFormatedPhonenumber3(metadata.formated)
            setFullValue3(metadata.fullValue)
          }}
          style={{
            width: '200px',
          }}
          SelectComponent={AntSelect}
          CallingCodeComponent={CallingCode}
          InputComponent={AntInput}
          WrapperComponent={PhoneNumberInputWrapper}
        />
        <p>
          value: {value3} <br />
          valid: {valid3 ? 'true' : 'false'} <br />
          formated Phone number: {formatedPhonenumber3} <br />
          full value: {fullValue3} <br />
        </p>
      </div>
    </div>
  )
}

export default App
