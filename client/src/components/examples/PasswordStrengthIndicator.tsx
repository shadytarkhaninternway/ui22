import { useState } from 'react'
import PasswordStrengthIndicator from '../PasswordStrengthIndicator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function PasswordStrengthIndicatorExample() {
  const [password, setPassword] = useState('')

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <PasswordStrengthIndicator password={password} />
    </div>
  )
}
