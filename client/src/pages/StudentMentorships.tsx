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
import { Search, Star, Briefcase, TrendingUp, Calendar, BookOpen, User, Bell, LogOut, Moon, Sun, Globe, ArrowLeft, Eye } from "lucide-react";
import { Link } from "wouter";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function StudentMentorships() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [fieldFilter, setFieldFilter] = useState("all");

  const mentors = [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      title: "Senior Software Engineer",
      field: "Software Engineering",
      experience: "15 years",
      rating: 4.9,
      reviews: 127,
      expertise: ["React", "Node.js", "System Design", "Career Growth"],
      available: true,
      nextSlot: "Tomorrow 3PM",
      bio: "Passionate about mentoring young developers and helping them navigate their career paths.",
    },
    {
      id: 2,
      name: "Eng. Sara Mohamed",
      title: "Lead Data Scientist",
      field: "Data Science",
      experience: "10 years",
      rating: 4.8,
      reviews: 98,
      expertise: ["Python", "Machine Learning", "Data Analysis", "AI"],
      available: true,
      nextSlot: "Dec 28, 10AM",
      bio: "Helping aspiring data scientists break into the field with practical guidance.",
    },
    {
      id: 3,
      name: "Prof. Karim Ali",
      title: "AI Research Director",
      field: "AI & Machine Learning",
      experience: "12 years",
      rating: 4.7,
      reviews: 156,
      expertise: ["Deep Learning", "NLP", "Computer Vision", "Research"],
      available: false,
      nextSlot: "Not available",
      bio: "Research-focused mentor specializing in cutting-edge AI technologies.",
    },
    {
      id: 4,
      name: "Eng. Nour Khaled",
      title: "UX/UI Design Lead",
      field: "Design",
      experience: "8 years",
      rating: 4.9,
      reviews: 89,
      expertise: ["Figma", "User Research", "Design Systems", "Portfolio"],
      available: true,
      nextSlot: "Dec 27, 2PM",
      bio: "Helping designers build stunning portfolios and land their dream jobs.",
    },
  ];

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
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
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
              <h1 className="text-3xl font-bold mb-2">Find a Mentor</h1>
              <p className="text-muted-foreground">Connect with experienced professionals</p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search mentors..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={fieldFilter} onValueChange={setFieldFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fields</SelectItem>
                    <SelectItem value="software">Software Engineering</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                    <SelectItem value="ai">AI & ML</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 backdrop-blur-lg bg-background/80 hover-elevate transition-all h-full">
                    <div className="flex gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{mentor.title}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium">{mentor.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">({mentor.reviews} reviews)</span>
                          <span className="text-xs text-muted-foreground">• {mentor.experience}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 rounded bg-primary/10 text-primary text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">Next Available</p>
                        <p className="text-sm font-medium">{mentor.nextSlot}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={`/student/mentorships/${mentor.id}`}>
                          <Button variant="outline" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Link href={`/student/mentorships/${mentor.id}`}>
                          <Button
                            className="bg-gradient-to-r from-primary to-purple-500"
                            disabled={!mentor.available}
                          >
                            {mentor.available ? "Book Session" : "Unavailable"}
                          </Button>
                        </Link>
                      </div>
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