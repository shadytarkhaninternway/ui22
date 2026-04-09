import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FloatingShapes from "@/components/FloatingShapes";
import CVUploadZone from "@/components/CVUploadZone";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, GraduationCap, Save, Bell, LogOut, Briefcase, Calendar, BookOpen, TrendingUp, Moon, Sun, Globe, ArrowLeft, Edit } from "lucide-react";
import { Link } from "wouter";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function StudentProfile() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [skills, setSkills] = useState(["React", "TypeScript", "Node.js", "Python"]);
  const [newSkill, setNewSkill] = useState("");

  // Profile State
  const [fullName, setFullName] = useState("Ahmed Mohamed");
  const [email, setEmail] = useState("ahmed@example.com");
  const [phone, setPhone] = useState("+20 123 456 7890");
  const [location, setLocation] = useState("Cairo, Egypt");

  const [university, setUniversity] = useState("Cairo University");
  const [college, setCollege] = useState("Faculty of Engineering");
  const [major, setMajor] = useState("Computer Science");
  const [graduationYear, setGraduationYear] = useState("2025");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IW</span>
                  </div>
                  <span className="font-semibold text-lg">InternWay</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2">
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
              <NotificationsPopover />
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-border/50 min-h-screen bg-background/50 backdrop-blur-sm">
          <nav className="p-4 space-y-2">
            <Link href="/student/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <TrendingUp className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/student/internships">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Briefcase className="h-5 w-5" />
                Internships
              </Button>
            </Link>
            <Link href="/student/mentorships">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-5 w-5" />
                Mentorships
              </Button>
            </Link>
            <Link href="/student/profile">
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                <User className="h-5 w-5" />
                Profile
              </Button>
            </Link>
            <Link href="/student/sessions">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-5 w-5" />
                My Sessions
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold">Profile Settings</h1>
                  <p className="text-muted-foreground">Manage your personal information and preferences</p>
                </div>
                <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/10">
                  <Edit className="w-4 h-4" /> Edit Profile
                </Button>
              </div>
            </motion.div>

            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="university">University</Label>
                    <Input id="university" value={university} onChange={(e) => setUniversity(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="college">College</Label>
                    <Input id="college" value={college} onChange={(e) => setCollege(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="major">Major</Label>
                    <Input id="major" value={major} onChange={(e) => setMajor(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="year">Graduation Year</Label>
                    <Input id="year" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* CV Upload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4">Upload CV</h2>
                <CVUploadZone
                  selectedFile={cvFile}
                  onFileSelect={setCvFile}
                  onFileRemove={() => setCvFile(null)}
                />
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button onClick={addSkill} className="bg-gradient-to-r from-primary to-purple-500">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm flex items-center gap-2"
                    >
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="hover:text-destructive">
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Save Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="w-full bg-gradient-to-r from-primary to-purple-500" size="lg">
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </Button>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}