import React from 'react'
import classnames from 'classnames'

export const Button = ({ children, className, ...otherProps }) => {
  return (
    <button className={classnames('button', className)} {...otherProps}>
      {children}
    </button>
  )
}
