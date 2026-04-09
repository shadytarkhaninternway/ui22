import Navbar from '../Navbar'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageProvider'

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Navbar />
          <div className="pt-20 p-6">
            <h1 className="text-2xl font-bold">Page Content</h1>
            <p className="text-muted-foreground mt-2">
              The navbar is fixed at the top with glassmorphism effect
            </p>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
