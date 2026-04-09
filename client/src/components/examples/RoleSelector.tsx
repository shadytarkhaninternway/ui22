import { useState } from 'react'
import RoleSelector, { Role } from '../RoleSelector'

export default function RoleSelectorExample() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Select Your Role</h2>
      <RoleSelector
        selectedRole={selectedRole}
        onSelectRole={(role) => {
          console.log('Role selected:', role)
          setSelectedRole(role)
        }}
      />
      {selectedRole && (
        <p className="text-center mt-4 text-muted-foreground">
          Selected: {selectedRole}
        </p>
      )}
    </div>
  )
}
