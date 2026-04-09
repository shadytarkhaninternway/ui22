import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedInput from "@/components/AnimatedInput";
import RoleSelector, { Role } from "@/components/RoleSelector";
import PasswordStrengthIndicator from "@/components/PasswordStrengthIndicator";
import CVUploadZone from "@/components/CVUploadZone";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, Lock, User, Briefcase, Building, MapPin, Phone, Globe, Moon, Sun, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function SignUpPage() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [, navigate] = useLocation();
  const [step, setStep] = useState<"role" | "form">("role");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [university, setUniversity] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [experience, setExperience] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleRoleContinue = () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }
    setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (selectedRole !== "company" && !fullName) newErrors.fullName = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords don't match";

    if (selectedRole === "student") {
      if (!university) newErrors.university = "University is required";
      if (!college) newErrors.college = "College is required";
      if (!major) newErrors.major = "Major is required";
      if (!phone) newErrors.phone = "Phone number is required";
      if (!cvFile) newErrors.cv = "CV is required";
    }

    if (selectedRole === "mentor") {
      if (!experience) newErrors.experience = "Years of experience is required";
      if (!jobTitle) newErrors.jobTitle = "Job title is required";
      if (!phone) newErrors.phone = "Phone number is required";
      if (!cvFile) newErrors.cv = "CV is required";
    }

    if (selectedRole === "company") {
      if (!companyName) newErrors.companyName = "Company name is required";
      if (!industry) newErrors.industry = "Industry is required";
      if (!companyLocation) newErrors.location = "Location is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Sign up submitted:", {
      selectedRole,
      fullName,
      email,
      password,
      ...(selectedRole === "student" && { university, college, degree, major, graduationYear, phone, cvFile }),
      ...(selectedRole === "mentor" && { experience, jobTitle, linkedIn, phone, cvFile }),
      ...(selectedRole === "company" && { companyName, industry, location: companyLocation, phone, address, description }),
    });

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
    <div className="min-h-screen relative overflow-hidden">
      <FloatingShapes />

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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-6xl backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6 shadow-2xl"
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
            <h1 className="text-3xl font-bold mb-2">{t("createAccount")}</h1>
            <p className="text-muted-foreground">
              {step === "role" ? t("selectRole") : `Complete your ${selectedRole} profile`}
            </p>
          </div>

          {step === "role" ? (
            <div className="space-y-6">
              <RoleSelector
                selectedRole={selectedRole}
                onSelectRole={setSelectedRole}
                labels={{
                  student: t("student"),
                  mentor: t("mentor"),
                  company: t("company"),
                }}
              />
              <Button
                onClick={handleRoleContinue}
                className="w-full bg-gradient-to-r from-primary to-purple-500"
                size="lg"
                disabled={!selectedRole}
                data-testid="button-continue-role"
              >
                {t("continue")}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <AnimatedInput
                  id={selectedRole === "company" ? "companyName" : "fullName"}
                  label={selectedRole === "company" ? t("companyName") : t("fullName")}
                  icon={selectedRole === "company" ? Building : User}
                  value={selectedRole === "company" ? companyName : fullName}
                  onChange={selectedRole === "company" ? setCompanyName : setFullName}
                  error={selectedRole === "company" ? errors.companyName : errors.fullName}
                  required
                />
                <AnimatedInput
                  id="email"
                  type="email"
                  label={t("email")}
                  icon={Mail}
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                  required
                />
                <div />
                <AnimatedInput
                  id="password"
                  type="password"
                  label={t("password")}
                  icon={Lock}
                  value={password}
                  onChange={setPassword}
                  error={errors.password}
                  required
                />
                <AnimatedInput
                  id="confirmPassword"
                  type="password"
                  label={t("confirmPassword")}
                  icon={Lock}
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  error={errors.confirmPassword}
                  required
                />
                {password && (
                  <div className="flex items-end">
                    <PasswordStrengthIndicator password={password} />
                  </div>
                )}
              </div>

              {selectedRole === "student" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <AnimatedInput
                      id="university"
                      label={t("university")}
                      value={university}
                      onChange={setUniversity}
                      error={errors.university}
                      required
                    />
                    <AnimatedInput
                      id="college"
                      label={t("college")}
                      value={college}
                      onChange={setCollege}
                      error={errors.college}
                      required
                    />
                    <AnimatedInput
                      id="degree"
                      label={t("degree")}
                      value={degree}
                      onChange={setDegree}
                    />
                    <AnimatedInput
                      id="major"
                      label={t("major")}
                      value={major}
                      onChange={setMajor}
                      error={errors.major}
                      required
                    />
                    <AnimatedInput
                      id="graduationYear"
                      label={t("graduationYear")}
                      value={graduationYear}
                      onChange={setGraduationYear}
                    />
                    <AnimatedInput
                      id="phone"
                      label={t("phone") || "Phone Number"}
                      icon={Phone}
                      value={phone}
                      onChange={setPhone}
                      error={errors.phone}
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm">{t("uploadCV")} *</Label>
                    <div className="mt-1">
                      <CVUploadZone
                        selectedFile={cvFile}
                        onFileSelect={setCvFile}
                        onFileRemove={() => setCvFile(null)}
                      />
                    </div>
                    {errors.cv && <p className="text-xs text-destructive mt-1">{errors.cv}</p>}
                  </div>
                </>
              )}

              {selectedRole === "mentor" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <AnimatedInput
                      id="experience"
                      label={t("experience")}
                      value={experience}
                      onChange={setExperience}
                      error={errors.experience}
                      required
                    />
                    <AnimatedInput
                      id="jobTitle"
                      label={t("jobTitle")}
                      value={jobTitle}
                      onChange={setJobTitle}
                      error={errors.jobTitle}
                      required
                    />
                    <AnimatedInput
                      id="linkedIn"
                      label={t("linkedIn")}
                      value={linkedIn}
                      onChange={setLinkedIn}
                    />
                    <AnimatedInput
                      id="phone"
                      label={t("phone") || "Phone Number"}
                      icon={Phone}
                      value={phone}
                      onChange={setPhone}
                      error={errors.phone}
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm">{t("uploadCV")} *</Label>
                    <div className="mt-1">
                      <CVUploadZone
                        selectedFile={cvFile}
                        onFileSelect={setCvFile}
                        onFileRemove={() => setCvFile(null)}
                      />
                    </div>
                    {errors.cv && <p className="text-xs text-destructive mt-1">{errors.cv}</p>}
                  </div>
                </>
              )}

              {selectedRole === "company" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                    <AnimatedInput
                      id="industry"
                      label={t("industry")}
                      value={industry}
                      onChange={setIndustry}
                      error={errors.industry}
                      required
                    />
                    <AnimatedInput
                      id="location"
                      label={t("location")}
                      icon={MapPin}
                      value={companyLocation}
                      onChange={setCompanyLocation}
                      error={errors.location}
                      required
                    />
                    <AnimatedInput
                      id="phone"
                      label={t("phone")}
                      icon={Phone}
                      value={phone}
                      onChange={setPhone}
                    />
                    <AnimatedInput
                      id="address"
                      label={t("address")}
                      value={address}
                      onChange={setAddress}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-sm">{t("description")}</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell us about your company..."
                      className="min-h-16 mt-1"
                      maxLength={500}
                      data-testid="textarea-description"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {description.length}/500
                    </p>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("role")}
                  className="flex-1"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-purple-500"
                  data-testid="button-submit-signup"
                >
                  {t("signUp")}
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                {t("haveAccount")}{" "}
                <Link href="/login">
                  <span className="text-primary font-medium hover:underline cursor-pointer" data-testid="link-login">
                    {t("login")}
                  </span>
                </Link>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
