import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FloatingShapes from "@/components/FloatingShapes";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Search, MapPin, DollarSign, Briefcase, TrendingUp, Calendar, BookOpen, User, Bell, LogOut, Moon, Sun, Globe, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function StudentInternships() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("all");
  const [paidFilter, setPaidFilter] = useState("all");

  const internships = [
    {
      id: 1,
      company: "Tech Corp",
      logo: "TC",
      role: "Frontend Developer Intern",
      location: "Cairo",
      type: "Remote",
      paid: true,
      salary: "5,000 EGP/month",
      match: "95%",
      skills: ["React", "TypeScript", "CSS"],
      duration: "3 months",
      deadline: "Dec 30, 2024",
    },
    {
      id: 2,
      company: "Digital Solutions",
      logo: "DS",
      role: "UI/UX Designer Intern",
      location: "Alexandria",
      type: "Hybrid",
      paid: true,
      salary: "4,500 EGP/month",
      match: "88%",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      duration: "4 months",
      deadline: "Jan 15, 2025",
    },
    {
      id: 3,
      company: "Innovation Hub",
      logo: "IH",
      role: "Full Stack Developer",
      location: "Remote",
      type: "Remote",
      paid: false,
      salary: "Unpaid",
      match: "82%",
      skills: ["Node.js", "MongoDB", "React"],
      duration: "6 months",
      deadline: "Jan 20, 2025",
    },
    {
      id: 4,
      company: "Startup Labs",
      logo: "SL",
      role: "Data Analyst Intern",
      location: "Giza",
      type: "On-site",
      paid: true,
      salary: "6,000 EGP/month",
      match: "75%",
      skills: ["Python", "SQL", "Excel"],
      duration: "3 months",
      deadline: "Dec 25, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
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
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
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
              <Button variant="ghost" className="w-full justify-start gap-2">
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
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold mb-2">Browse Internships</h1>
              <p className="text-muted-foreground">Find your perfect internship opportunity</p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search internships..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="cairo">Cairo</SelectItem>
                    <SelectItem value="alexandria">Alexandria</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={paidFilter} onValueChange={setPaidFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Payment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="paid">Paid Only</SelectItem>
                    <SelectItem value="unpaid">Unpaid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>

            {/* Internships List */}
            <div className="space-y-4">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 backdrop-blur-lg bg-background/80 hover-elevate transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xl">{internship.logo}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{internship.role}</h3>
                              <p className="text-sm text-muted-foreground">{internship.company}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary mb-1">{internship.match}</div>
                              <p className="text-xs text-muted-foreground">Match Score</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm">
                              <MapPin className="w-3 h-3" />
                              {internship.location} • {internship.type}
                            </span>
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                              internship.paid ? "bg-green-500/10 text-green-600" : "bg-orange-500/10 text-orange-600"
                            }`}>
                              <DollarSign className="w-3 h-3" />
                              {internship.salary}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm">
                              <Calendar className="w-3 h-3" />
                              {internship.duration}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {internship.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 rounded bg-primary/10 text-primary text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Deadline: {internship.deadline}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button className="bg-gradient-to-r from-primary to-purple-500 flex-1">
                        Apply Now
                      </Button>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}