import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface AnimatedInputProps {
  id: string;
  type?: string;
  label: string;
  icon?: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export default function AnimatedInput({
  id,
  type = "text",
  label,
  icon: Icon,
  value,
  onChange,
  error,
  required,
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors" />
        )}
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`peer ${Icon ? "pl-10" : "pl-4"} pt-6 pb-2 h-14 transition-all ${
            error ? "border-destructive animate-shake" : ""
          }`}
          data-testid={`input-${id}`}
        />
        <Label
          htmlFor={id}
          className={`absolute ${Icon ? "left-10" : "left-4"} transition-all pointer-events-none ${
            isFocused || hasValue
              ? "top-2 text-xs text-primary"
              : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
          }`}
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      </div>
      {error && (
        <p className="text-xs text-destructive mt-1 animate-fade-in" data-testid={`error-${id}`}>
          {error}
        </p>
      )}
    </div>
  );
}
