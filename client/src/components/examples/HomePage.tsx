import HomePage from '@/pages/HomePage'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageProvider'

export default function HomePageExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </ThemeProvider>
  )
}
