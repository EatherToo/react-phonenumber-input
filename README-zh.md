## react-phonenumber-text-input

<b>基于 React 的电话号码输入组件</b>

![image](./docs/iShot_2023-09-20_11.12.09.png)

### [在线示例](https://codesandbox.io/s/agitated-hill-trvmxc?file=/src/App.tsx)

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

#### Features

1.  **支持完全的样式自定义**
    - 使用 `className` `style` `inputClassName` `inputStyle` `selectClassName` `selectStyle` `optionClassName` `optionStyle`可以自定义所有你想要的样式
    - 使用 `SelectComponent` `CallingCodeComponent` `InputComponent` `WrapperComponent` 可以用任何自定义的组件替换默认的选择框、国家代码、输入框和包装组件
2.  **超级容易使用，无需任何额外配置**
       <!-- - import the component and use it simply, no need to worry about the country code, the phone number format, the validation, etc. the component will handle all the things for you -->
        - 只需引入组件并简单使用，无需担心国家代码、电话号码格式、验证等问题，组件会处理所有东西
    <!-- 3. **auto parse and format the phone number**
       - when you input phone number with `+`, the component will recognize the country code and format the phone number automatically
       - the component will auto format the phone number when you input the phone number -->
3.  **自动解析和格式化电话号码**
    - 当输入电话号码时，组件将自动格式化电话号码
    - 当输入带有 `+` 的电话号码时，组件将自动识别国家代码并格式化电话号码

#### 使用

1. basic usage

   ```tsx
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
       <div
         className="App"
         <div
         className="App"
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
   ```

2. 组件属性说明

   | 名称                | 类型                                                                                       | 默认值                           | 描述                                                                                                                                     |
   | ------------------- | ------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
   | value               | string                                                                                     | ''                               | 输入框的值                                                                                                                               |
   | onChange            | (value: string, metadata: { formated: string; fullValue: string; valid: boolean }) => void | -                                | 输入框值改变时的回调函数；metadata.formated 是格式化后的电话号码，metadata.fullValue 是完整的电话号码，metadata.valid 是电话号码是否有效 |
   | countries           | CountryCode[]                                                                              | 所有的国家                       | 国家编码列表                                                                                                                             |
   | defaultCountry      | CountryCode                                                                                | first country of props.countries | 默认的国家编码                                                                                                                           |
   | placeholder         | string                                                                                     | ''                               | 输入框的占位符                                                                                                                           |
   | showCallingCode     | boolean                                                                                    | true                             | 是否显示国家 callingCode 码                                                                                                              |
   | onCountryCodeChange | (countryCode: CountryCode) => void                                                         | -                                | 国家编码改变时的回调函数                                                                                                                 |
   | className           | string                                                                                     | undfined                         | 输入框包裹容器的 className                                                                                                               |
   | style               | React.CSSProperties                                                                        | undfined                         | 输入框包裹容器的 style                                                                                                                   |
   | inputClassName      | string                                                                                     | undfined                         | 输入框的 className                                                                                                                       |
   | inputStyle          | React.CSSProperties                                                                        | undfined                         | 输入框的 style                                                                                                                           |
   | selectClassName     | string                                                                                     | undfined                         | slect 框的 className                                                                                                                     |
   | selectStyle         | React.CSSProperties                                                                        | undfined                         | slect 框的 style                                                                                                                         |
   | optionClassName     | string                                                                                     | undfined                         | option 的 className （对使用原生 select 的 option 标签无效）                                                                             |
   | optionStyle         | React.CSSProperties                                                                        | undfined                         | option 的 style （对使用原生 select 的 option 标签无效）                                                                                 |

3. 自定义样式

   - 基础用法
     - 使用`className`和`style`属性自定义输入框的样式
     - 使用`inputClassName`和`inputStyle`属性自定义输入框的样式
     - 使用`selectClassName`和`selectStyle`属性自定义国家编码选择器的样式
     - 使用`optionClassName`和`optionStyle`属性自定义国家编码选择器的选项的样式
   - 高级用法
     使用 BaseReactPhonenumberInput 组件 (具体用法可以看看 [online demo](https://codesandbox.io/s/agitated-hill-trvmxc?file=/src/App.tsx))
     BaseReactPhonenumberInput 有四个额外的属性：
     - `SelectComponent`
     - `CallingCodeComponent`
     - `InputComponent`
     - `WrapperComponent`
