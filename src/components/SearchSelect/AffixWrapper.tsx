import React from 'react'

const AffixWrapper = (props: {
  children: React.ReactNode
  top: string
  left: string
  onBackdropClick?: () => void
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        props.onBackdropClick?.()
      }}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: props.top,
          left: props.left,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export default AffixWrapper
