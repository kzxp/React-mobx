import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as Modal from '../modal'

const stories = storiesOf('Bulma/Modal', module)

_.each(Modal, (Component, key) => {
  stories.add(key, () => <Component>{key}</Component>)
})
