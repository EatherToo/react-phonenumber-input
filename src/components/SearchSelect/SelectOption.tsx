import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { CountryCode, CountryCodeToLanguageMap } from '../../type'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { getCountryCallingCode } from '../../utils/getCountryCallingCode'

const SelectOptionsWrapper = (props: {
  children: React.ReactNode
  activeIndex: number
  onSearch: (search: string) => void
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!wrapperRef.current) return
    if (props.activeIndex === -1) return
    wrapperRef.current.scrollTop = props.activeIndex * 32
  }, [props.activeIndex])

  return (
    <div className="react-phone-input__search-select__options-wrapper">
      <div className="react-phonenumber__search-select__input-wrapper">
        <input
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => props.onSearch?.(e.target.value)}
          className="react-phonenumber__search-select__input"
          placeholder='search countries (e.g. "CN" or "+86")'
        />
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="search"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
        </svg>
      </div>
      <div
        ref={wrapperRef}
        className="react-phonenumber__search-select__scroll"
      >
        {props.children}
      </div>
    </div>
  )
}
const Option = (props: {
  content: React.ReactNode
  active: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  className?: string
  style?: React.CSSProperties
}) => {
  return (
    <div
      onClick={props.onClick}
      className={`react-phone-input__search-select__option ${
        props.active ? 'react-phone-input__search-select__active' : ''
      }
      ${props.className || ''}
      `}
      style={props.style}
    >
      <div>{props.content}</div>
      {props.active && (
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="check"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
        </svg>
      )}
    </div>
  )
}

const SelectOptions = (props: {
  countries: CountryCode[] | readonly CountryCode[]
  activeCountry?: CountryCode
  onChooseCountry: (countryCode: CountryCode) => void
  optionClassName?: string
  optionStyle?: React.CSSProperties
}) => {
  const [search, setSearch] = useState('')
  const filteredCountries = useMemo(() => {
    if (!search) return props.countries
    let _search = search
    if (search.startsWith('+')) {
      _search = search.slice(1)
    }

    return props.countries.filter((c) => {
      const code = getCountryCallingCode(c)
      return (
        code.startsWith(_search) ||
        c.toLowerCase().startsWith(_search.toLowerCase())
      )
    })
  }, [search, props.countries])
  return (
    <SelectOptionsWrapper
      activeIndex={props.countries.findIndex((c) => c === props.activeCountry)}
      onSearch={setSearch}
    >
      {filteredCountries.map((c) => {
        return (
          <Option
            key={c}
            content={
              <>
                {getUnicodeFlagIcon(c)} &nbsp; +{getCountryCallingCode(c)}
                &nbsp;
                {new Intl.DisplayNames([CountryCodeToLanguageMap[c] || c], {
                  type: 'region',
                }).of(c)}
              </>
            }
            active={c === props.activeCountry}
            onClick={(e) => {
              e.stopPropagation()
              props.onChooseCountry(c)
            }}
          />
        )
      })}
    </SelectOptionsWrapper>
  )
}
export default SelectOptions
