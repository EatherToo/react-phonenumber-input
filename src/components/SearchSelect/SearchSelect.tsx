import React, { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { PhoneNumberSelectProps } from '../../type'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

import './SearchSelect.css'
import AffixWrapper from './AffixWrapper'
import SelectOptions from './SelectOption'
import useMemoizedFn from '../../hooks/useMemoizedFn'

const SearchSelect: React.ComponentType<PhoneNumberSelectProps> = (props) => {
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
        className="react-phone-input__search-select"
      >
        <span>
          {getUnicodeFlagIcon(innerCountryCode)} {innerCountryCode}
        </span>
        <svg data-baseweb="icon" width="1.2em" viewBox="0 0 24 24">
          <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z"></path>
        </svg>
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
            />
          </AffixWrapper>,
          document.body
        )}
    </>
  )
}
export default SearchSelect
