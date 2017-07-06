import { asyncComponent } from 'components/custom'

export default [
  {
    name: 'Redux',
    path: 'redux',
    component: asyncComponent(() => import('containers/random/redux'))
  },
  {
    name: 'Mobx',
    path: 'mobx',
    component: asyncComponent(() => import('containers/random/mobx'))
  }
]
