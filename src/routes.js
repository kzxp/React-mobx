import { asyncComponent } from 'components/custom'

export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: asyncComponent(() => import('./containers/home'))
  },
  {
    name: 'Random',
    path: '/random',
    component: asyncComponent(() => import('./containers/random'))
  }
]
