import LoginPage from '@/pages/LoginPage'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageProvider'

export default function LoginPageExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LoginPage />
      </LanguageProvider>
    </ThemeProvider>
  )
}
