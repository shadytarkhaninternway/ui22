import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import AnimatedInput from "@/components/AnimatedInput";
import RoleSelector, { Role } from "@/components/RoleSelector";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, Lock, Globe, Moon, Sun, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [, navigate] = useLocation();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!selectedRole) {
      alert("Please select your role");
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Login submitted:", { selectedRole, email, password, rememberMe });
    
    // Redirect based on role
    if (selectedRole === "student") {
      navigate("/student/dashboard");
    } else if (selectedRole === "mentor") {
      navigate("/mentor/dashboard");
    } else if (selectedRole === "company") {
      navigate("/company/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex relative">
      <Link href="/">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 z-50"
          data-testid="button-back-home"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </Link>
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-primary/20 to-purple-500/20 items-center justify-center overflow-hidden">
        <FloatingShapes />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-12"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center animate-float">
            <span className="text-6xl font-bold text-white">IW</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Welcome to InternWay
          </h2>
          <p className="text-xl text-muted-foreground">
            Your journey to the perfect internship starts here
          </p>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="flex items-center justify-end gap-2 mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")}>
                  العربية {language === "ar" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{t("welcomeBack")}</h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">{t("selectRole")}</p>
              <RoleSelector
                selectedRole={selectedRole}
                onSelectRole={setSelectedRole}
                labels={{
                  student: t("student"),
                  mentor: t("mentor"),
                  company: t("company"),
                }}
              />
            </div>

            <AnimatedInput
              id="email"
              type="email"
              label={t("email")}
              icon={Mail}
              value={email}
              onChange={(value) => {
                setEmail(value);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              error={errors.email}
              required
            />

            <AnimatedInput
              id="password"
              type="password"
              label={t("password")}
              icon={Lock}
              value={password}
              onChange={(value) => {
                setPassword(value);
                if (errors.password) setErrors({ ...errors, password: undefined });
              }}
              error={errors.password}
              required
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  data-testid="checkbox-remember"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium cursor-pointer"
                >
                  {t("rememberMe")}
                </label>
              </div>
              <Link href="/forgot-password">
                <button
                  type="button"
                  className="text-sm font-medium text-primary hover:underline"
                  data-testid="link-forgot-password"
                >
                  {t("forgotPassword")}
                </button>
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
              size="lg"
              data-testid="button-submit-login"
            >
              {t("login")}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {t("noAccount")}{" "}
              <Link href="/signup">
                <span className="text-primary font-medium hover:underline cursor-pointer" data-testid="link-signup">
                  {t("signUp")}
                </span>
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
