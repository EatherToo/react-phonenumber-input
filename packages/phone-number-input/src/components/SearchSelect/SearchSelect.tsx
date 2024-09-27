import React, { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { PhoneNumberSelectProps } from '../../type'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

import './SearchSelect.css'
import AffixWrapper from './AffixWrapper'
import SelectOptions from './SelectOption'
import useMemoizedFn from '../../hooks/useMemoizedFn'

const SearchSelect: React.ComponentType<
  PhoneNumberSelectProps & { border?: boolean }
> = (props) => {
  const border = props.border === undefined ? true : props.border
  const [isOpen, setIsOpen] = useState(false)
  const [top, setTop] = useState('0px')
  const [left, setLeft] = useState('0px')
  const selectRef = React.useRef<HTMLDivElement>(null)
  const handleOpen = useMemoizedFn(() => {
    if (!selectRef.current) return
    const {
      left: leftPos,
      top: topPos,
      height,
    } = selectRef.current.getBoundingClientRect()
    setLeft(`${leftPos}px`)
    setTop(`${topPos + height + 2}px`)
    setIsOpen(true)
  })
  const [_innerCountryCode, _setInnerCountryCode] = useState(props.countryCode)
  const innerCountryCode = useMemo(() => {
    return props.countryCode || _innerCountryCode
  }, [_innerCountryCode, props.countryCode])
  return (
    <>
      <div
        ref={selectRef}
        onClick={handleOpen}
        className={`react-phone-input__search-select ${
          border ? 'react-phone-input__search-select__border' : ''
        } ${props.className || ''}`}
        style={props.style}
      >
        <span>
          {getUnicodeFlagIcon(innerCountryCode)} {innerCountryCode}
        </span>
        <div className="react-phone-input__search-select__arrow"></div>
      </div>
      {isOpen &&
        createPortal(
          <AffixWrapper
            onBackdropClick={() => setIsOpen(false)}
            top={top}
            left={left}
          >
            <SelectOptions
              countries={props.countries}
              activeCountry={props.countryCode}
              onChooseCountry={(c) => {
                props.setCountryCode(c)
                props.onCountryCodeChange?.(c)
                _setInnerCountryCode(c)
                setIsOpen(false)
              }}
              optionClassName={props.optionClassName}
              optionStyle={props.optionStyle}
            />
          </AffixWrapper>,
          document.body
        )}
    </>
  )
}
export default SearchSelect
