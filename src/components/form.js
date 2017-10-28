import React from 'react'
import classnames from 'classnames'

export const Field = ({ children, className, ...otherProps }) => {
  return <div className={classnames('field', className)}>{children}</div>
}

export const Label = ({ children, className, ...otherProps }) => {
  return <label className={classnames('label', className)}>{children}</label>
}

export const Control = ({ children, className, ...otherProps }) => {
  return <div className={classnames('control', className)}>{children}</div>
}

export const Input = ({ children, className, ...otherProps }) => {
  return <input className={classnames('input', className)} {...otherProps} />
}
