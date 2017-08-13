import React from 'react'
import classnames from 'classnames'

export const Tag = ({ children, className }) => {
  return (
    <span className={classnames('tag', className)}>
      {children}
    </span>
  )
}
