import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as Tag from '../tag'

const stories = storiesOf('Bulma/Tag', module)

_.each(Tag, (Component, key) => {
  stories.add(key, () =>
    <Component>
      {key}
    </Component>
  )
})
