import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as Layout from '../layout'

const stories = storiesOf('Bulma/Layout', module)

_.each(Layout, (Component, key) => {
  stories.add(key, () =>
    <Component>
      {key}
    </Component>
  )
})
