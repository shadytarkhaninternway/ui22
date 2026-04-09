import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Star, TrendingUp, Bell, LogOut, User, BookOpen, Moon, Sun, Globe, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function StudentDashboard() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const stats = [
    {
      icon: Briefcase,
      label: "Internships Applied",
      value: "12",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      label: "Sessions Booked",
      value: "8",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      label: "Upcoming Session",
      value: "Tomorrow 3PM",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const recommendations = [
    {
      company: "Tech Corp",
      role: "Frontend Developer",
      match: "95%",
      location: "Cairo",
      paid: true,
    },
    {
      company: "Digital Solutions",
      role: "UI/UX Designer",
      match: "88%",
      location: "Alexandria",
      paid: true,
    },
    {
      company: "Innovation Hub",
      role: "Full Stack Developer",
      match: "82%",
      location: "Remote",
      paid: false,
    },
  ];

  const mentors = [
    {
      name: "Dr. Ahmed Hassan",
      field: "Software Engineering",
      experience: "15 years",
      rating: 4.9,
      available: true,
    },
    {
      name: "Eng. Sara Mohamed",
      field: "Data Science",
      experience: "10 years",
      rating: 4.8,
      available: true,
    },
    {
      name: "Prof. Karim Ali",
      field: "AI & Machine Learning",
      experience: "12 years",
      rating: 4.7,
      available: false,
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
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">IW</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    InternWay
                  </span>
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
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
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
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
              <p className="text-muted-foreground">Here's what's happening with your career journey</p>
            </motion.div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 backdrop-blur-lg bg-background/80 hover-elevate transition-all">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Recommended Internships</h2>
              <div className="space-y-4">
                {recommendations.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-border bg-card hover-elevate transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{item.role}</h3>
                        <p className="text-sm text-muted-foreground">{item.company} • {item.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-bold text-primary">{item.match}</span>
                          <span className="text-sm text-muted-foreground">Match</span>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-purple-500">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommended Mentors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Recommended Mentors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mentors.map((mentor, index) => (
                  <Card key={index} className="p-4 hover-elevate transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{mentor.name}</h3>
                        <p className="text-xs text-muted-foreground">{mentor.field}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <span className="text-xs text-muted-foreground">• {mentor.experience}</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-purple-500"
                      disabled={!mentor.available}
                    >
                      {mentor.available ? "Book Session" : "Unavailable"}
                    </Button>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}