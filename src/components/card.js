import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

export const Card = ({ children, className, ...otherProps }) => {
  return (
    <div className={classnames('card', className)} {...otherProps}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className, ...otherProps }) => {
  return (
    <div className={classnames('card-content', className)} {...otherProps}>
      {children}
    </div>
  )
}

export const CardFooter = ({ children, className, ...otherProps }) => {
  return (
    <footer className={classnames('card-footer', className)} {...otherProps}>
      {children}
    </footer>
  )
}

export const CardFooterItem = ({ children, className, ...otherProps }) => {
  return (
    <p className={classnames('card-footer-item', className)} {...otherProps}>
      {children}
    </p>
  )
}

export const FetchCodeCard = connect((state, { params }) => ({ id: params.id }))(Card)
