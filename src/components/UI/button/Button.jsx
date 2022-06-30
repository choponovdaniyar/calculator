import React from 'react'
import BaseButton from './BaseButton'

export default function Button({children, ...props}) {
  return (
    <BaseButton {...props}>
      {children}
    </BaseButton>
  )
}
