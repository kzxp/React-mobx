import React from 'react'
import classnames from 'classnames'

export const Media = ({ children, className, ...otherProps }) => (
  <article className={classnames('media', className)} {...otherProps}>
    {children}
  </article>
)

export const MediaLeft = ({ children, className, ...otherProps }) => (
  <div className={classnames('media-left', className)} {...otherProps}>
    {children}
  </div>
)

export const MediaContent = ({ children, className, ...otherProps }) => (
  <div className={classnames('media-content', className)} {...otherProps}>
    {children}
  </div>
)

export const MediaRight = ({ children, className, ...otherProps }) => (
  <div className={classnames('media-right', className)} {...otherProps}>
    {children}
  </div>
)
