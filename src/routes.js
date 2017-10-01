import { asyncComponent } from 'components/custom'
import { user, code } from './icons'

export default [
  {
    name: 'Me',
    path: '/me',
    icon: user,
    component: asyncComponent(() => import('./containers/me'))
  },
  {
    name: 'Code',
    path: '/code',
    icon: code,
    component: asyncComponent(() => import('./containers/code'))
  }
]
