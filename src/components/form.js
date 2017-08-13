import React from 'react'
import classnames from 'classnames'

export const Field = ({ children, className, ...otherProps }) => {
  return (
    <div className={classnames('field', className)}>
      {children}
    </div>
  )
}

export const Control = ({ children, className, ...otherProps }) => {
  return (
    <p className={classnames('control', className)}>
      {children}
    </p>
  )
}

export const Input = ({ children, className, ...otherProps }) => {
  return <input className={classnames('input', className)} {...otherProps} />
}
