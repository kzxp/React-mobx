import { FUN_FRIDAY_MEMO } from 'CONSTANTS'
import { asyncComponent } from 'components/custom'

export default {
  ['FUN_FRIDAY_MEMO']: {
    name: 'Fun friday memo',
    to: FUN_FRIDAY_MEMO,
    Component: asyncComponent(() => import('./redux/fun-friday-memo'))
  }
}

export const sequence = [FUN_FRIDAY_MEMO]
