import { asyncComponent } from 'components/custom'

export default [
  {
    name: 'Me',
    path: '/',
    exact: true,
    component: asyncComponent(() => import('./containers/me'))
  },
  {
    name: 'Random',
    path: '/random'
    // component: asyncComponent(() => import('./containers/random'))
  }
]
