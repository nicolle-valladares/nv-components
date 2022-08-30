import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

// Export the styled component theme as a hook
export const useTheme = () => {
  const themeContext = useContext(ThemeContext)

  return {
    themeContext: themeContext,
    ...themeContext
  }
}
