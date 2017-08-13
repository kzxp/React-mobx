import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as Form from '../form'

const stories = storiesOf('Bulma/Form', module)

_.each(Form, (Component, key) => {
  stories.add(key, () =>
    <Component>
      {key}
    </Component>
  )
})
