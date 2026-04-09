import { motion } from "framer-motion";
import { GraduationCap, Users, Building2 } from "lucide-react";

export type Role = "student" | "mentor" | "company";

interface RoleSelectorProps {
  selectedRole: Role | null;
  onSelectRole: (role: Role) => void;
  labels?: {
    student: string;
    mentor: string;
    company: string;
  };
}

const roles = [
  {
    id: "student" as Role,
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mentor" as Role,
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "company" as Role,
    icon: Building2,
    color: "from-green-500 to-emerald-500",
  },
];

export default function RoleSelector({
  selectedRole,
  onSelectRole,
  labels = { student: "Student", mentor: "Mentor", company: "Company" },
}: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {roles.map((role) => {
        const Icon = role.icon;
        const isSelected = selectedRole === role.id;

        return (
          <motion.button
            key={role.id}
            onClick={() => onSelectRole(role.id)}
            className={`relative p-6 rounded-xl border-2 transition-all hover-elevate ${isSelected
              ? "border-primary scale-105 shadow-lg"
              : "border-border/50 opacity-60 hover:opacity-100"
              }`}
            whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-testid={`role-${role.id}`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center ${isSelected ? "" : "grayscale"
                }`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {labels[role.id]}
            </h3>
            {isSelected && (
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-primary"
                layoutId="selectedRole"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
