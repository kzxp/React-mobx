import { asyncComponent } from 'components/custom'

export default [
  {
    name: 'Redux',
    path: 'redux'
  },
  {
    name: 'MobX',
    path: 'mobx',
    children: [
      {
        name: 'Todo list with MobX',
        path: 'todo',
        component: asyncComponent(() => import('containers/random/mobx/Todo'))
      }
    ]
  }
]
