import React from 'react'
import { Field, Control, Input } from 'components/form'
import { Button } from 'components/button'

export const FilterBar = () => {
  return (
    <Field>
      <Control className="is-expanded">
        <Input className="is-medium" type="text" />
      </Control>
    </Field>
  )
}

export const ItemList = () => {
  return <div />
}

export const Item = () => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">
          “There are two hard things in computer science: cache invalidation, naming things, and
          off-by-one errors.”
        </p>
        <p className="subtitle">Jeff Atwood</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            Share on <a href="#">Facebook</a>
          </span>
        </p>
      </footer>
    </div>
  )
}
