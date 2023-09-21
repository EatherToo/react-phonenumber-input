## react-phonenumber-text-input

<b>an international phone number input component for React.</b>

![image](./docs/iShot_2023-09-20_11.12.09.png)

### [online demo](https://codesandbox.io/s/agitated-hill-trvmxc?file=/src/App.tsx)

### Install

```bash
  npm install react-phonenumber-text-input --save
```

```bash
  yarn add react-phonenumber-text-input
```

```bash
  pnpm add react-phonenumber-text-input
```

#### Usage

1. basic usage

   ```tsx
   import PhonenumberInput from 'react-phonenumber-input'
   import { useState } from 'react'

   function App() {
     const [value, setValue] = useState('')
     const [valid, setValid] = useState(false)
     const [formatedPhonenumber, setFormatedPhonenumber] = useState('')
     const [fullValue, setFullValue] = useState('')

     return (
       <div
         className="App"
         style={{
           margin: '100px',
           textAlign: 'left',
         }}
       >
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
       </div>
     )
   }
   ```

2. use html native select element for country code selection

   ```tsx
   import { PhoneNumberInputWithNativeSelect } from 'react-phonenumber-input'
   import { useState } from 'react'

   function App() {
     const [value, setValue] = useState('')
     const [valid, setValid] = useState(false)
     const [formatedPhonenumber, setFormatedPhonenumber] = useState('')
     const [fullValue, setFullValue] = useState('')

     return (
       <div
         className="App"
         style={{
           margin: '100px',
           textAlign: 'left',
         }}
       >
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
       </div>
     )
   }
   ```

3. props of PhonenumberInput

   | name                | type                                                                                       | default                          | description                                                                                                                                                                                                                                           |
   | ------------------- | ------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | value               | string                                                                                     | ''                               | the value of the input                                                                                                                                                                                                                                |
   | onChange            | (value: string, metadata: { formated: string; fullValue: string; valid: boolean }) => void | -                                | callback function when the value of the input changes. `value` is value of the input, `formated` is the formated phone number, `fullValue` is the value with country calling code(e.g. +8618902462356), `valid` is the validation result of the input |
   | countries           | CountryCode[]                                                                              | all Countries codes              | the countries to be displayed in the country code selection dropdown                                                                                                                                                                                  |
   | defaultCountry      | CountryCode                                                                                | first country of props.countries | the default country code                                                                                                                                                                                                                              |
   | placeholder         | string                                                                                     | ''                               | the placeholder of the input                                                                                                                                                                                                                          |
   | showCallingCode     | boolean                                                                                    | true                             | whether to show the country calling code in the input                                                                                                                                                                                                 |
   | onCountryCodeChange | (countryCode: CountryCode) => void                                                         | -                                | callback function when the country code changes                                                                                                                                                                                                       |
   | className           | string                                                                                     | undfined                         | the className of the phone number input container                                                                                                                                                                                                     |
   | style               | React.CSSProperties                                                                        | undfined                         | the style of the phone number input container                                                                                                                                                                                                         |
   | inputClassName      | string                                                                                     | undfined                         | the className of the input                                                                                                                                                                                                                            |
   | inputStyle          | React.CSSProperties                                                                        | undfined                         | the style of the input                                                                                                                                                                                                                                |
   | selectClassName     | string                                                                                     | undfined                         | the className of the country code selection dropdown                                                                                                                                                                                                  |
   | selectStyle         | React.CSSProperties                                                                        | undfined                         | the style of the country code selection dropdown                                                                                                                                                                                                      |
   | optionClassName     | string                                                                                     | undfined                         | the className of the country code selection dropdown option (invalid for PhoneNumberInputWithNativeSelect)                                                                                                                                            |
   | optionStyle         | React.CSSProperties                                                                        | undfined                         | the style of the country code selection dropdown option (invalid for PhoneNumberInputWithNativeSelect)                                                                                                                                                |

4. custom style

   - basic
     - use `className` and `style` props to custom the style of the phone number input container
     - use `inputClassName` and `inputStyle` props to custom the style of the input
     - use `selectClassName` and `selectStyle` props to custom the style of the country code selection dropdown
     - use `optionClassName` and `optionStyle` props to custom the style of the country code selection dropdown option (invalid for PhoneNumberInputWithNativeSelect)
   - advanced
     use BaseReactPhonenumberInput (see detail on [online demo](https://codesandbox.io/s/agitated-hill-trvmxc?file=/src/App.tsx))
     BaseReactPhonenumberInput has four extra props:
     - `SelectComponent`
     - `CallingCodeComponent`
     - `InputComponent`
     - `WrapperComponent`
