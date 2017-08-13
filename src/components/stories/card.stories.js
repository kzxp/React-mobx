import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as Card from '../card'

const stories = storiesOf('Bulma/Card', module)

_.each(Card, (Component, key) => {
  stories.add(key, () =>
    <Component>
      {key}
    </Component>
  )
})
