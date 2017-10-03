import React from 'react'
import classnames from 'classnames'

export const ToolTipWrapper = ({ children, className, ...otherProps }) => (
  <div className={classnames('tooltip__wrapper', className)} {...otherProps}>
    {children}
  </div>
)
export const ToolTip = ({ children, ...otherProps }) => (
  <div className="tooltip" {...otherProps}>
    {children}
  </div>
)
