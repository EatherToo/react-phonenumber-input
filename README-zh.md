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

#### 使用

1. 基本用法

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

2. 使用原生 select 标签的国家编码选择器

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

3. 组件属性说明

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

4. 自定义样式

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
