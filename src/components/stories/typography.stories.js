import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as Typography from '../typography'

const stories = storiesOf('Bulma/Typography', module)

_.each(Typography, (Component, key) => {
  stories.add(key, () =>
    <Component tag="h1">
      {key}
    </Component>
  )
})
