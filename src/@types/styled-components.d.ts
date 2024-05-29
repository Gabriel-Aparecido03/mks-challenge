import 'styled-components'
import { theme } from '@/styles/theme'

type themeType = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends themeType {}
}