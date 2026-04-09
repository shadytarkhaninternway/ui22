import SignUpPage from '@/pages/SignUpPage'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageProvider'

export default function SignUpPageExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SignUpPage />
      </LanguageProvider>
    </ThemeProvider>
  )
}
