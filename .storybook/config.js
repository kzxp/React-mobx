import { configure } from '@storybook/react'
import '../src/styles/main.css'

function loadStories() {
  require('../stories')
}

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
