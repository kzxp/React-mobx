import React from 'react'
import classnames from 'classnames'

export const Title = ({ children, tag: Tag, className }) => {
  return (
    <Tag className={classnames('title', className)}>
      {children}
    </Tag>
  )
}

export const Subtitle = ({ children, tag: Tag, className }) => {
  return (
    <Tag className={classnames('subtitle', className)}>
      {children}
    </Tag>
  )
}
