import React from 'react'
import classnames from 'classnames'

export const Hero = ({ children, className }) => {
  return (
    <section className={classnames('hero', className)}>
      <div className="hero-body">
        {children}
      </div>
    </section>
  )
}

export const Container = ({ children, className }) => {
  return (
    <div className={classnames('container', className)}>
      {children}
    </div>
  )
}

export const Cols = ({ children, className }) => {
  return (
    <div className={classnames('columns', className)}>
      {children}
    </div>
  )
}

export const Col = ({ children, className }) => {
  return (
    <div className={classnames('column', className)}>
      {children}
    </div>
  )
}
