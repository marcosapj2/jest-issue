import { Theme } from '@constants/theme'
import 'styled-components'

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
