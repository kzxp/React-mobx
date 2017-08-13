import React from 'react'
import classnames from 'classnames'

export const Tag = ({ children, className }) => {
  return (
    <span class={classname('tag', className)}>
      {children}
    </span>
  )
}
