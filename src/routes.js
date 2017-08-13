import { asyncComponent } from 'components/custom'

export default [
  {
    name: 'Random',
    path: '/random',
    component: asyncComponent(() => import('./containers/random'))
  },
  {
    name: 'Me',
    path: '/me',
    component: asyncComponent(() => import('./containers/me'))
  }
]
