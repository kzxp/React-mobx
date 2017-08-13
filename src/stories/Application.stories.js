import { storiesOf } from '@kadira/storybook'
import { specs, describe, it } from 'storybook-addon-specifications'

import { mount } from 'enzyme'
import expect from 'expect'

import Application from '../Application'

storiesOf('Application', module).add('Random', () => {
  specs(() =>
    describe('Hello World', () => {
      it('Should have the Hello World label', () => {
        let output = mount(Application)
        expect(output.text()).toContain('Random')
      })
    })
  )

  return Application
})
