import React from 'react'
import classnames from 'classnames'

export const H1Title = ({ children, className }) => {
  return (
    <h1 className={classnames('title', className)}>
      {children}
    </h1>
  )
}

export const H2Subtitle = ({ children, className }) => {
  return (
    <h2 className={classnames('subtitle', className)}>
      {children}
    </h2>
  )
}
