import React from 'react'
import classnames from 'classnames'

export const Select = ({ className, options, ...otherProps }) => (
  <div className={classnames('select', className)}>
    <select {...otherProps}>
      {options.map(({ text, value }) => (
        <option key={text} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
)
