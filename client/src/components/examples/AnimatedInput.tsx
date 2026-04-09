import { useState } from 'react'
import AnimatedInput from '../AnimatedInput'
import { Mail, Lock } from 'lucide-react'

export default function AnimatedInputExample() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <AnimatedInput
        id="email"
        type="email"
        label="Email Address"
        icon={Mail}
        value={email}
        onChange={setEmail}
        required
      />
      <AnimatedInput
        id="password"
        type="password"
        label="Password"
        icon={Lock}
        value={password}
        onChange={setPassword}
        error={password.length > 0 && password.length < 6 ? "Password too short" : undefined}
        required
      />
    </div>
  )
}
