import { motion } from "framer-motion";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export default function PasswordStrengthIndicator({
  password,
}: PasswordStrengthIndicatorProps) {
  const getStrength = (pass: string): number => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.length >= 12) strength++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[^a-zA-Z\d]/.test(pass)) strength++;
    return Math.min(strength, 4);
  };

  const strength = password.length > 0 ? getStrength(password) : 0;
  const percentage = (strength / 4) * 100;

  const getColor = () => {
    if (strength <= 1) return "bg-destructive";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-blue-500";
    return "bg-green-500";
  };

  const getLabel = () => {
    if (strength === 0) return "";
    if (strength <= 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  if (password.length === 0) return null;

  return (
    <div className="space-y-2 animate-fade-in" data-testid="password-strength">
      <div className="flex gap-1 h-1.5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${i < strength ? getColor() : "bg-transparent"}`}
              initial={{ width: 0 }}
              animate={{ width: i < strength ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>
      <p className={`text-xs font-medium ${
        strength <= 1 ? "text-destructive" :
        strength === 2 ? "text-yellow-600" :
        strength === 3 ? "text-blue-600" : "text-green-600"
      }`}>
        {getLabel()}
      </p>
    </div>
  );
}
